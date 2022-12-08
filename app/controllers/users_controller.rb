class UsersController < ApplicationController
    # skip_before_action :authorize, only: :create

    # def show
    #     render json: @current_user
    # end

    # can use the above for auth stuff, auth action is in app controller. replace show action below with the show action above and uncomment out the authorize action in app controller.

    def index
        render json: User.all
    end

    # index action not actually being used in app. just using for dev purposes.

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    def show
        user = User.find_by(id: session[:user_id])
        render json: user
    end

    # def liked?
    #     user = User.find_by(id: session[:user_id])
    #     Favorite.where(user_id: user.id)
    # end

    private

    def user_params
        params.permit(:username, :password, :password_confirmation)
    end

end