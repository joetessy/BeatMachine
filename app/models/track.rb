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
  validates :title, :artist_id, presence: true
  has_attached_file :image, styles: { medium: "300x300", thumb: "100x100" }, default_url: 'chicken.jpg'
  has_attached_file :audio
  validates_attachment_presence :audio, :image
  validates_image_content_type :image, content_type: /\Aimage\/.*\Z/
  validates_attachment_content_type :mp3, content_type: [ 'application/mp3', 'application/x-mp3', 'audio/mpeg', 'audio/mp3' ]

  beglongs_to :artist,
  class_name: :User,
  primary_key: :id,
  foreign_key: :artist_id


end
