class BoardBookSerializer < ActiveModel::Serializer
  attributes :id, :board_id, :book_id, :book
  belongs_to :book
  belongs_to :board
end
