require 'httparty'

class EarthquakeApi
  include HTTParty
  base_uri 'https://earthquake.usgs.gov/earthquakes/feed/v1.0'

  def last_month
    endpoint = "/summary/all_month.geojson"
    response = self.class.get(endpoint)
    raise "API Error: #{response.code}" unless response.success?
    response.parsed_response
  end
end