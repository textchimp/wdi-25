class CreateAlbums < ActiveRecord::Migration[5.1]
  def change
    create_table :albums do |t|
      t.text :title
      t.text :image
      t.text :year

      t.timestamps
    end
  end
end
