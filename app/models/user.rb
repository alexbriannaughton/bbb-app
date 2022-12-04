class User < ApplicationRecord
    has_many :reviews
    has_many :bathrooms, through: :reviews

    has_secure_password

    validates :username, uniqueness: :true, presence: :true
end
