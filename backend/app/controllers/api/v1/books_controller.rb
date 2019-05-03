class Api::V1::BooksController < ApplicationController
     skip_before_action :authorized, only: [:index]
    def index
        render json: Book.all.uniq {|e| e[:title] }, status: 201
    end

    def show
        @book = Book.find(params[:id])
        render json: @book
    end
    
end
