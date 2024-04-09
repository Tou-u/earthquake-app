class Api::FeaturesController < ApplicationController
  def index
    @features = Feature.all
    render json: @features
  end
end
