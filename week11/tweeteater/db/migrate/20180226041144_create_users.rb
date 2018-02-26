class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.text :email
      t.text :name
      t.text :job
      t.text :interests

      t.timestamps
    end
  end
end
