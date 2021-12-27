class CreateTeams < ActiveRecord::Migration[6.1]
  def change
    create_table :teams do |t|
      t.string :name

      t.timestamps
    end
  end
end

# "dependencies": {
#   "history": "^5.2.0",
#   "react-router-dom": "^6.2.1"
# }