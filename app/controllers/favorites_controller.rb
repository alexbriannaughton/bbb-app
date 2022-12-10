class FavoritesController < ApplicationController
    def index
        render json: Favorite.all
    end

    def create
        favorite = Favorite.create!(favorite_params)
        render json: favorite
    end

    def destroy
        Favorite.find(params[:id]).destroy
        head :no_content
    end

    def show
        fav = Favorite.find(params[:id])
        render json: fav
    end

    private

    def favorite_params
        params.permit(:user_id, :bathroom_id)
    end

end
