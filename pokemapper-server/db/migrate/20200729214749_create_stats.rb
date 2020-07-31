class CreateStats < ActiveRecord::Migration[6.0]
  def change
    create_table :stats do |t|
      t.string :name
      t.integer :base_stat
      t.belongs_to :pokemon, null: false, foreign_key: true

      t.timestamps
    end
  end
end
