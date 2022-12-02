class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :date, :description, :cleanliness, :cleanliness_rating, :function, :function_rating, :style, :style_rating
end
