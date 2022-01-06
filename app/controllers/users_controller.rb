class UsersController < ApplicationController
    skip_before_action :authorize, only: [:create, :index, :destroy] 

    def create 
        user = User.create!(user_params)
        user.update(boss: false) 
        session[:user_id] = user.id 
        render json: user, status: :created
    end

    def show 
        render json: @current_user
    end

    private

    def user_params 
        params.permit(:username, :password, :password_comfirmation)
    end
end
