class Reservation < ApplicationRecord
  # belongs_to :user

  # use '.passenger' as an alias for the '.user' association
  belongs_to :passenger, class_name: :User, foreign_key: 'user_id'
  belongs_to :flight
end
