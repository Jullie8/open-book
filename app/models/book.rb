class Book < ApplicationRecord
    has_many :board_books
    has_many :boards, through: :board_books

    # def self.find_uniq_values
    #     Book.all.uniq! {|e| e[:title] }
    # end

end
