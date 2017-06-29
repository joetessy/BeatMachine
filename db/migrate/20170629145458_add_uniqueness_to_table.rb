class AddUniquenessToTable < ActiveRecord::Migration[5.0]
  def change
    add_index :favorites, [ :track_id, :user_id ], unique: true
  end
end
