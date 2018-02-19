class Flight < ApplicationRecord
  has_many :reservations
  belongs_to :airplane
  # has_many :users, through: :reservations

  # make 'passengers' the name of the '.users' association, like an alias
  has_many :passengers, through: :reservations, source: :user

  def departure_date_formatted
    departure_date.strftime "%Y-%m-%d, %I:%M%P"
  end

end

#
