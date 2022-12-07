class User < ApplicationRecord
    has_many :reviews
    has_many :bathrooms, through: :reviews

    has_secure_password

    validates :username, uniqueness: :true, presence: :true

    def average_experience
        all = self.reviews.map {|r| r.average_score}
        return (all.sum / all.size).round(1)
    end

    def average_cleanliness
        self.reviews.sum(:cleanliness_rating) / self.reviews.length
    end

    def average_function
        self.reviews.sum(:function_rating) / self.reviews.length
    end

    def average_style
        self.reviews.sum(:style_rating) / self.reviews.length
    end

    def reviews_total
        self.reviews.length
    end

end
