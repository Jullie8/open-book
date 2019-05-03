class CreateBooks < ActiveRecord::Migration[5.2]
  def change
    create_table :books do |t|
      t.string :title
      t.string :author
      t.string :img
      t.string :read_link
      
      t.timestamps
    end
  end
end
