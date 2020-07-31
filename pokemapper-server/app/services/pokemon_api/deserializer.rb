module PokemonApi
  class Deserializer
    attr_reader :data

    def initialize(data)
      @data = data
    end

    def parsed_response
      {
        name: data["name"], 
        front_sprite: data["sprites"]["front_default"], 
        back_sprite: data["sprites"]["back_default"], 
        stats: data["stats"].map do |stat| 
          {
            name: stat["stat"]["name"],
            base_stat: stat["base_stat"]
          }
        end
      }
    end

  end
end