module WeatherApi
  class Adapter
    BASE_URL = "https://api.weather.gov/"

    attr_reader :connection

    def initialize
      @connection = Faraday.new(BASE_URL) do |conn|
        conn.request :url_encoded
        conn.adapter :net_http
      end
    end

    def forecast_for_location(lat, lng)
      location_response = location_data(lat, lng)
      return nil unless location_response
      forecast_response = request(location_response["properties"]["forecast"])
      WeatherApi::Deserializer.new(forecast_response).forecast
    end

    private

    def location_data(lat, lng)
      request("https://api.weather.gov/points/#{lat.to_f.round(4)},#{lng.to_f.round(4)}")
    end

    def forecast_data(url)
      request(url)
    end
    
    def request(endpoint, params = nil)
      response = connection.get(endpoint, params)
      return nil unless response.success?
      JSON.parse(response.body)
    end

  end
end