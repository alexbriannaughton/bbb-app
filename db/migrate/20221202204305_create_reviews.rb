class CreateReviews < ActiveRecord::Migration[6.1]
  def change
    create_table :reviews do |t|
      t.date :date
      t.text :description
      t.text :cleanliness
      t.integer :cleanliness_rating
      t.text :function
      t.integer :function_rating
      t.text :style
      t.integer :style_rating
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :bathroom, null: false, foreign_key: true

      t.timestamps
    end
  end
end
