class PokemonSerializer < ActiveModel::Serializer
  attributes :name, :front_sprite, :back_sprite, :lat, :lng
  has_many :stats
end
