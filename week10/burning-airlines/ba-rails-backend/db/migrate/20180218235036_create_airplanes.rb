class CreateAirplanes < ActiveRecord::Migration[5.1]
  def change
    create_table :airplanes do |t|
      t.string :name
      t.integer :rows
      t.integer :cols

      t.timestamps
    end
  end
end
