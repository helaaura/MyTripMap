class CreateLocations < ActiveRecord::Migration
  def change
    create_table :locations do |t|
      t.float :latitude
      t.float :altitude
      t.string :placeName
      t.string :country
      t.string :city
      t.references :User, index: true

      t.timestamps
    end
  end
end
