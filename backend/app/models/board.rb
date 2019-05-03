class Board < ApplicationRecord
    belongs_to :user
    has_many :board_books, dependent: :delete_all
    has_many :books, through: :board_books
end
