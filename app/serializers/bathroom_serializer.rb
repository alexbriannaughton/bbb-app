class BathroomSerializer < ActiveModel::Serializer
  attributes :id, :location, :description, :public, :b_average_score
  has_many :reviews
end
