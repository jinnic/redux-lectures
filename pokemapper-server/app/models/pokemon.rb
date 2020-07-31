class Pokemon < ApplicationRecord
  has_many :stats

  validates :name, presence: true
  validates :front_sprite, presence: true
  validates :lat, presence: true
  validates :lng, presence: true

  def self.create_from_api(api_pokemon, lat, lng)
    pokemon = Pokemon.create(
      name: api_pokemon[:name],
      front_sprite: api_pokemon[:front_sprite],
      back_sprite: api_pokemon[:back_sprite],
      lat: lat,
      lng: lng
    )

    if pokemon.valid?
      api_pokemon[:stats].each do |stat|
        pokemon.stats.create(name: stat[:name], base_stat: stat[:base_stat])
      end
    end

    pokemon
  end

end
