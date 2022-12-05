class ReviewsController < ApplicationController
    # index action not actually being used in app rn. just using for dev purposes.
    def index
        render json: Review.all
    end

    def create
        review = Review.create!(review_params)
        render json: review
    end

    private
        
    def review_params
        params.permit(:user_id, :bathroom_id, :date, :description, :cleanliness, :cleanliness_rating, :function, :function_rating, :style, :style_rating)
    end

    
end
