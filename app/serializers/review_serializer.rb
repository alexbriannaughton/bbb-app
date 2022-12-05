class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :bathroom_id, :date, :description, :cleanliness, :cleanliness_rating, :function, :function_rating, :style, :style_rating
end
