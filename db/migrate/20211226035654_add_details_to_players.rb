class AddDetailsToPlayers < ActiveRecord::Migration[6.1]
  def change
    add_column :players, :details, :text
  end
end
