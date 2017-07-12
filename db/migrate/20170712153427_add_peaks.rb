class AddPeaks < ActiveRecord::Migration[5.0]
  def up
    add_attachment :tracks, :peaks
  end

  def down
    remove_attachment :tracks, :peaks
  end
end
