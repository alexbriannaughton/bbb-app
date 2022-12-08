class Bathroom < ApplicationRecord
    has_many :reviews, dependent: :destroy
    has_many :users, through: :reviews

    has_many :favorites

    validates :location, length: { minimum: 10 }
    validates :description, length: { minimum: 10 }
    validate :validate_public

    def validate_public
        if public == nil
            errors.add(:public, "must have option selected")
        end
    end

    def b_average_score
        if self.reviews.count > 0
            all_scores = reviews.map {|r| r.average_score}
            return (all_scores.sum / all_scores.size).round(1)
        else return "no reviews"
        end
    end

end
