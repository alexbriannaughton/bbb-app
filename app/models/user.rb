class User < ApplicationRecord
    has_many :reviews
    has_many :bathrooms, through: :reviews

    has_many :favorites
    has_many :bathrooms, through: :favorites

    has_secure_password

    validates :username, uniqueness: :true, presence: :true

    def average_experience
        if self.reviews.count > 0
            all = self.reviews.map {|r| r.average_score}
            return (all.sum / all.size).round(1)
        else return "no reviews"
        end
    end

    def average_cleanliness
        if self.reviews.count > 0
            self.reviews.sum(:cleanliness_rating) / self.reviews.length
        else return "no reviews"
        end
    end

    def average_function
        if self.reviews.count > 0
            self.reviews.sum(:function_rating) / self.reviews.length
        else return "no reviews"
        end
    end

    def average_style
        if self.reviews.count > 0
            self.reviews.sum(:style_rating) / self.reviews.length
        else return "no reviews"
        end
    end

    def reviews_total
        self.reviews.length
    end

end
