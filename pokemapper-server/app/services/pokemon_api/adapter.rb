module PokemonApi
  # The Adapter Pattern is a nice way to create API wrappers and make clean interfaces for working with outside APIs in our projects
  # https://github.com/infinum/rails-handbook/blob/master/Design%20Patterns/Adapters.md
  class Adapter
    BASE_URL = "https://pokeapi.co/api/v2/"

    attr_reader :connection

    def initialize
      # Faraday is a HTTP client like RestClient, see: https://lostisland.github.io/faraday/usage/
      # Set up our client so when we call PokemonAPI::Adapter.new we can use it to make as many API calls as we'd like
      # We save it in an instance variable and set up an attr_reader to use this in other method calls
      @connection = Faraday.new(BASE_URL) do |conn|
        conn.request :url_encoded
        conn.adapter :net_http
      end
    end
    
    def random_pokemon
      # deserialize raw data
      PokemonApi::Deserializer.new(random_pokemon_data).parsed_response
    end

    private

    # This is the primary functionality of our adapter, it gives us an easy interface to interact with the Giphy API
    def random_pokemon_data
      id = rand(1..807)
      request("pokemon/#{id}")
    end

    # private method to send request and parse JSON
    # if we want to set up our adapter for other API requests, we can reuse this method
    def request(endpoint, params = nil)
      response = connection.get(endpoint, params)
      JSON.parse(response.body)
    end

  end
end