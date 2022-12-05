class BathroomsController < ApplicationController
    def index
        render json: Bathroom.all
    end

    # index action not actually being used in app right now. just using for dev purposes.

    def create
        bathroom = Bathroom.create!(bathroom_params)
        render json: bathroom, status: :created
    end

    private

    def bathroom_params
        params.permit(:location, :description, :public)
    end
end
