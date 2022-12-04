class Bathroom < ApplicationRecord
    has_many :reviews
    has_many :users, through: :reviews

    validates :location, length: { minimum: 10 }
    validates :description, length: { minimum: 10 }
    validate :validate_public

    def validate_public
        if public == nil
            errors.add(:public, "must have option selected")
        end
    end
end
