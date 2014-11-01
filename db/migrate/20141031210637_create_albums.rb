class CreateAlbums < ActiveRecord::Migration
  def change
    create_table :albums do |t|
      t.string :name
      t.string :fileName
      t.datetime :creationDate
      t.text :comment
      t.references :User, index: true
      t.references :Location, index: true

      t.timestamps
    end
  end
end
