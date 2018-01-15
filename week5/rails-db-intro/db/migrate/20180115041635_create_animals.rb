class CreateAnimals < ActiveRecord::Migration[5.0]


  # SQL: CREATE TABLE animals(
  #   name STRING,
  #   roundness STRING,
  #   age INTEGER,

  def change
    create_table :animals do |t|
      t.string :name
      t.string :roundness
      t.integer :age
      t.timestamps
    end
  end
end
