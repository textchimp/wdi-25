class CreateMixtapes < ActiveRecord::Migration[5.1]
  def change
    create_table :mixtapes do |t|
      t.text :name
      t.text :image

      t.timestamps
    end
  end
end
