class TeamsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    skip_before_action :authorize, only: [:index]

    def show
        team = Team.find(params[:id])
        render json: team
    end
    
    def index
        render json: Team.all
    end
    
    def create
        team = Team.create!(team_params)
        render json: team, status: :created 
    end

    private 

    def team_params
        Team.permit(:name)
    end

    def render_not_found_response
        render json: {error: "Team not Found"}, status: :not_found 
    end
end
