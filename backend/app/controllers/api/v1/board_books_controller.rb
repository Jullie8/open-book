class Api::V1::BoardBooksController < ApplicationController
    def index
        render json: BoardBook.all, status: 201
    end

    def create
        @board_book = BoardBook.create(board_id:boardbook_params['board_id'], book_id:boardbook_params['book_id'])
        if @board_book.valid?
            # @token = encode_token(user_id: @user.id)
            # byebug
            render json: { board_book: BoardBookSerializer.new(@board_book), jwt: @token }, status: :created    
        else
            render json: { error: 'failed to create board' }, status: :not_acceptable
        end  
     
    end 



    def update
        @board_book = BoardBook.find(params[:id])
        @board_book.update(boardbook_params)
        # byebug
        #render json: @board_book, status: :updated  
        render json: { board_book: BoardBookSerializer.new(@board_book), jwt: @token }, status: :created    

    end

    private

    def boardbook_params
        params.require(:board_book).permit(:board_id, :book_id)
    end
end
