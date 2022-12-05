class Review < ApplicationRecord
    belongs_to :bathroom
    belongs_to :user

    validates :description, length: { minimum: 10 }
    validates :cleanliness, length: { minimum: 10 }
    validates :function, length: { minimum: 10 }
    validates :style, length: { minimum: 10 }

    validate :validate_cleanliness_rating, 
    :validate_function_rating, :validate_style_rating, 

    def validate_cleanliness_rating
        if cleanliness_rating == nil
            errors.add(:cleanliness_rating, "must have option selected")
        end
    end

    def validate_function_rating
        if function_rating == nil
            errors.add(:function_rating, "must have option selected")
        end
    end

    def validate_style_rating
        if style_rating == nil
            errors.add(:style_rating, "must have option selected")
        end
    end

    def average_score
        ((cleanliness_rating + function_rating + style_rating).to_f / 3).round(1)
    end

end


