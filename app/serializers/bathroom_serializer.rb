class BathroomSerializer < ActiveModel::Serializer
  attributes :id, :location, :description, :public, :lat, :lng, :b_average_score
  has_many :reviews
end
