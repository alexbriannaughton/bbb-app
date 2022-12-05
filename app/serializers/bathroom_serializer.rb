class BathroomSerializer < ActiveModel::Serializer
  attributes :id, :location, :description, :public

  has_many :reviews
end
