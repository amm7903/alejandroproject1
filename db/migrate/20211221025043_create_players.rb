class CreatePlayers < ActiveRecord::Migration[6.1]
  def change
    create_table :players do |t|
      t.string :name
      t.integer :goals
      t.integer :assists
      t.text :clubs

      t.timestamps
    end
  end
end
