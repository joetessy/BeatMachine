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
  include ActionView::Helpers::DateHelper

  validates :author_id, :track_id, :body, presence: true;

  belongs_to :author,
  class_name: :User,
  primary_key: :id,
  foreign_key: :author_id

  belongs_to :track,
  class_name: :Track,
  primary_key: :id,
  foreign_key: :track_id

  def time_ago
    time_ago_in_words(self.created_at)
  end

end
