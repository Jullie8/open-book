class BoardBook < ApplicationRecord
  belongs_to :book
  belongs_to :board
end
