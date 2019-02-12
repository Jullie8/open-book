class BoardSerializer < ActiveModel::Serializer
  attributes :id, :title, :user_id
    belongs_to :user
    has_many :board_books
    has_many :books, through: :board_books
end

