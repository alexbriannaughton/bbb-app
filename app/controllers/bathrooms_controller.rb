class BathroomsController < ApplicationController
    def index
        render json: Bathroom.all
    end

    def show
        bathroom = find_bathroom
        render json: bathroom, include: ['reviews', 'reviews.user']
    end

    # index action not actually being used in app right now. just using for dev purposes.

    def create
        bathroom = Bathroom.create!(bathroom_params)
        render json: bathroom, status: :created
    end

    def near_me
        render json: Bathroom.nearby(params[:lat], params[:lng])
    end

    private

    def find_bathroom
        Bathroom.find(params[:id])
    end

    def bathroom_params
        params.permit(:location, :description, :public, :lat, :lng, :neighborhood)
    end
end
