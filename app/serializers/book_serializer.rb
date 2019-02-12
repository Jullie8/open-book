class BookSerializer < ActiveModel::Serializer
  attributes :id, :title, :author, :img, :read_link
    has_many :board_books
    has_many :boards, through: :board_books
end
