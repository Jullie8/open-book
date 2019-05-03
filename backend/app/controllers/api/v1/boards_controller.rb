class Api::V1::BoardsController < ApplicationController
    def index
        render json: Board.all, status: 201
    end

    def create
        @board = Board.create(title:board_params['title'], user:current_user)
         if @board.valid?
            # @token = encode_token(user_id: @user.id)
        render json: @board, status: :created    
        else
            render json: { error: 'failed to create board' }, status: :not_acceptable
        end  
    end

    def show
        @board = Board.find(params['id'])
        render json:  {books: BoardSerializer.new(@board)}
    end


    def destroy 
        @board = Board.find(params[:id])
        @board.destroy
        render json: { title: BoardSerializer.new(@board), jwt: @token }, status: :created  
    end

    private
    def board_params
        params.require(:board).permit(:title, :user_id)
    end 


end
