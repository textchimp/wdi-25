# == Schema Information
#
# Table name: albums
#
#  id         :integer          not null, primary key
#  title      :text
#  image      :text
#  year       :text
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Album < ApplicationRecord
  has_many :songs
  has_many :artists, through: :songs

  def artist
    # there is an implied 'self.' at the start of this line:
    artists.uniq
  end


end
