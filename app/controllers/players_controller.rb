class PlayersController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    # skip_before_action :authorize, only: [:index, :destroy, :show]
    skip_before_action :authorize, only: [:destroy]
    
    def show 
        player = Player.find(params[:id])
        render json: player
    end

    def index
        render json: Player.all
    end

    def destroy
        player = Player.find(params[:id])
        player.destroy
        head :no_content
    end

    def create
        player = Player.create!(player_params)
        render json: player, status: :created
    end

    def update
        player = Player.find_by(id: params[:id])
        player.update(player_params)
        render json: player, status: :ok
    end

    private
    
    def player_params
        params.permit(:name, :goals, :assists, :clubs, :details, :team_id)
    end

    def render_not_found_response
        render json: {error: "Player not found"}, status: :not_found
    end
end
