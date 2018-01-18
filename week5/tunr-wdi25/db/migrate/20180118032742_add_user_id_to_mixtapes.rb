class AddUserIdToMixtapes < ActiveRecord::Migration[5.1]
  def change
    add_column :mixtapes, :user_id, :integer
  end
end
