class CreatePlanets < ActiveRecord::Migration[5.1]
  def change
    create_table :planets do |t|
      t.string :name
      t.string :image
      t.float :orbit
      t.float :diameter
      t.string :roundness
      t.float :mass
      t.integer :moons

      t.timestamps
    end
  end
end
