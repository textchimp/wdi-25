class CreateFlights < ActiveRecord::Migration[5.1]
  def change
    create_table :flights do |t|
      t.integer :flight_number
      t.integer :airplane_id
      t.datetime :departure_date
      t.string :origin
      t.string :destination

      t.timestamps
    end
  end
end
