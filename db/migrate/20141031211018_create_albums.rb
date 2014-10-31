class CreateAlbums < ActiveRecord::Migration
  def change
    create_table :albums do |t|
      t.string :name
      t.string :file_name
      t.datetime :creation_date
      t.text :comment
      t.references :location, index: true
      t.references :user, index: true

      t.timestamps
    end
  end
end
