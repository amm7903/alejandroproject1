class PlayerSerializer < ActiveModel::Serializer
  attributes :id, :name, :goals, :assists, :clubs, :team_id, :details
end
