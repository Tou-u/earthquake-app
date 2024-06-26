class Feature < ApplicationRecord
  validates :title, :place, :mag_type, :latitude, :longitude , :external_url, presence: true
  validates :magnitude, numericality: { in: -1..10 }
  validates :latitude, numericality: { in: -90..90 }
  validates :longitude, numericality: { in: -180..180 }

  MAG_TYPES = %w(md ml ms mw me mi mb mlg)
  scope :filter_by_mag_type, ->(mag_type) {
    mag_types = Array(mag_type) & MAG_TYPES
    mag_types.present? ? where(mag_type: mag_types) : all
  }

  scope :last_month, -> {
    last_month = Time.now.last_month.to_i * 1000
    where('time >= ?', last_month)
  }

  scope :ordered_by_newest, -> { order(time: :desc) }

  has_many :comments
end
