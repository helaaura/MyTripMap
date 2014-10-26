class CreatePictures < ActiveRecord::Migration
  def change
    create_table :pictures do |t|
      t.string :title
      t.string :fileName
      t.datetime :dateTimeTaken
      t.text :comment
      t.references :Location, index: true

      t.timestamps
    end
  end
end
