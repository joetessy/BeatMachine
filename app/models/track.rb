# == Schema Information
#
# Table name: tracks
#
#  id                 :integer          not null, primary key
#  title              :string           not null
#  artist_id          :integer          not null
#  description        :string
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  image_file_name    :string
#  image_content_type :string
#  image_file_size    :integer
#  image_updated_at   :datetime
#  audio_file_name    :string
#  audio_content_type :string
#  audio_file_size    :integer
#  audio_updated_at   :datetime
#

class Track < ApplicationRecord
  include ActionView::Helpers::DateHelper
  validates :title, :artist_id, presence: true
  has_attached_file :image, styles: { medium: "300x300", thumb: "100x100" }, default_url: 'chicken.jpg'
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/, defualt_url: 'greatest.mp3'

  has_attached_file :audio
  do_not_validate_attachment_file_type :audio



  belongs_to :artist,
  class_name: :User,
  primary_key: :id,
  foreign_key: :artist_id

  has_many :comments,
  class_name: :Comment,
  primary_key: :id,
  foreign_key: :track_id

  has_many :favorites,
  class_name: :Favorite,
  primary_key: :id,
  foreign_key: :track_id

  has_many :favorite_users,
  through: :favorites,
  source: :user

  def time_ago
    time_ago_in_words(self.created_at)
  end
end
