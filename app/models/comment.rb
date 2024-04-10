class Comment < ApplicationRecord
  scope :ordered_by_newest, -> { order(created_at: :desc) }
end
