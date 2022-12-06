class CreateBathrooms < ActiveRecord::Migration[6.1]
  def change
    create_table :bathrooms do |t|
      t.string :location
      t.float :lat 
      t.float :lng
      t.text :description
      t.boolean :public
      t.string :image_url
      

      t.timestamps
    end
  end
end
