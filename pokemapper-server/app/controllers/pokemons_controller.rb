class PokemonsController < ApplicationController

  def index
    pokemons = Pokemon.all
    render json: pokemons
  end

  def create
    api_pokemon = PokemonApi::Adapter.new.random_pokemon
    pokemon = Pokemon.create_from_api(api_pokemon, params[:lat], params[:lng])

    if pokemon.valid?
      render json: pokemon, status: :created
    else
      render json: { errors: pokemon.errors.full_messages }, status: :bad_request
    end
  end
  
end