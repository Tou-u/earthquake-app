class FeatureSerializer < ActiveModel::Serializer
  attributes :id, :type
  attribute :additional, key: :attribute
  attributes :links

  def type
    'feature'
  end

  def additional
    {
      external_id: object.external_id,
      magnitude: object.magnitude,
      place: object.place,
      time: object.time,
      tsunami: object.tsunami,
      mag_type: object.mag_type,
      title: object.title,
      coordinates: {
        longitude: object.longitude,
        latitude: object.latitude
      }
    }
  end

  def links
    { external_url: object.external_url }
  end
end
