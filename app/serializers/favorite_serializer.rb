class FavoriteSerializer < ActiveModel::Serializer
  attributes :id, :bathroom_id
  has_one :user
  has_one :bathroom
end
# 