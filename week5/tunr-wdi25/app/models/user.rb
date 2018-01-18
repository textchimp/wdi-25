class User < ApplicationRecord

  has_many :mixtapes

  has_secure_password   # will use password_digest field to store encrypted password

end
