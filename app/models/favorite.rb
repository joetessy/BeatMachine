class Favorite < ActiveRecord::Base
  validates :track, :user, presence: true

  belongs_to :user,
  class_name: :User,
  primary_key: :id,
  foreign_key: :user_id

  belongs_to :track,
  class_name: :Track,
  primary_key: :id,
  foreign_key: :track_id

end
