class Favorite < ApplicationRecord
  belongs_to :user
  belongs_to :bathroom

  validates :user_id, uniqueness: { scope: :bathroom_id }

  
end
