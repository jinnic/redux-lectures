module WeatherApi
  class Deserializer
    attr_reader :data

    def initialize(data)
      @data = data
    end

    def forecast
      period = data["properties"]["periods"][0]
      icon = icon_from_forecast(period["shortForecast"].downcase)

      {
        temperature: period["temperature"], 
        temperatureUnit: period["temperatureUnit"], 
        shortForecast: period["shortForecast"], 
        icon: icon
      }
    end

    private

    def icon_from_forecast(forecast)
      return "☀️" if forecast.include?("sun")
      return "🌧" if forecast.include?("rain") || forecast.include?("storm") || forecast.include?("shower")
      return "☁️" if forecast.include?("cloud")
      return "❄️" if forecast.include?("snow")
    end

  end
end