namespace :batch do
  desc "Refresh features from earthquake api"
  task refresh_features: :environment do
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

end
