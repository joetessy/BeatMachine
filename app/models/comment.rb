# == Schema Information
#
# Table name: comments
#
#  id         :integer          not null, primary key
#  author_id  :integer          not null
#  track_id   :integer          not null
#  body       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Comment < ApplicationRecord
  validates :author_id, :track_id, :body, presence: true;

  belongs_to :author,
  class_name: :User,
  primary_key: :id,
  foreign_key: :author_id

  belongs_to :track,
  class_name: :Track,
  primary_key: :id,
  foreign_key: :track_id


end
