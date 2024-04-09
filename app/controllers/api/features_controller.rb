class Api::FeaturesController < ApplicationController
  include ErrorHandler
  before_action :set_feature, only: %i[ show ]

  # Pagy settings for Features
  require 'pagy/extras/items'
  Pagy::DEFAULT[:items] = 40
  Pagy::DEFAULT[:max_items] = 1000
  Pagy::DEFAULT[:items_param] = :per_page

  # GET /features
  def index
    features = Feature.filter_by_mag_type(params[:mag_type])
    @pagy, @features = pagy(features)

    pagination = {
      current_page: @pagy.page,
      total: @pagy.count,
      per_page: @pagy.items
    }

    render json: { data: ActiveModel::Serializer::CollectionSerializer.new(
      @features, serializer: FeatureSerializer), pagination: pagination }
  end

  # GET /features/1
  def show
    render json: @feature
  end

  # Update the list of features from the earthquake api
  def refresh
    earthquake_api = EarthquakeApi.new
    earthquakes_data = earthquake_api.last_month
    created_records  = 0

    earthquakes_data['features'].each do |feature|
      attributes = {
        external_id: feature['id'],
        magnitude: feature['properties']['mag'],
        place: feature['properties']['place'],
        time: feature['properties']['time'],
        tsunami: feature['properties']['tsunami'],
        mag_type: feature['properties']['magType'],
        title: feature['properties']['title'],
        longitude: feature['geometry']['coordinates'][0],
        latitude: feature['geometry']['coordinates'][1],
        external_url: feature['properties']['url']
      }

      earthquake = Feature.find_or_initialize_by(external_id: attributes[:external_id])
      earthquake.attributes = attributes

      if earthquake.new_record?
        if earthquake.save
          created_records += 1
        end
      end
    end

    render json: { message: created_records  > 0 ? "#{created_records } new records have been added." : "No new records found." }
  rescue StandardError => e
    render json: { error: e.message }
  end

  private
  def set_feature
    @feature = Feature.find(params[:id])
  end
end
