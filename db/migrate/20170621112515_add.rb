class Add < ActiveRecord::Migration[5.0]
  def change
    add_attachment :tracks, :audio
  end
end
