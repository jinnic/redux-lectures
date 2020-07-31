class CreatePokemons < ActiveRecord::Migration[6.0]
  def change
    create_table :pokemons do |t|
      t.string :name
      t.string :front_sprite
      t.string :back_sprite
      t.float :lat
      t.float :lng

      t.timestamps
    end
  end
end
