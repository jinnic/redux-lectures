class WeatherController < ApplicationController

  def show
    forecast = WeatherApi::Adapter.new.forecast_for_location(params[:lat], params[:lng])
    if forecast.nil?
      forecast = { temperature: 75, temperatureUnit: "F", shortForecast: "Sunny", icon: "☀️" }
    end
    render json: forecast
  end

end