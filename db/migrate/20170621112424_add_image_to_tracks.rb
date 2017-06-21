class AddImageToTracks < ActiveRecord::Migration[5.0]
  def change
    add_attachment :tracks, :image
  end
end
