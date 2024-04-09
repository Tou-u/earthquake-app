export interface Features {
  data: Feature[]
  pagination: Pagination
}

export interface Feature {
  id: number
  type: Type
  attribute: Attribute
  links: Links
}

interface Attribute {
  external_id: string
  magnitude: string
  place: string
  time: string
  tsunami: boolean
  mag_type: MagType
  title: string
  coordinates: Coordinates
}

interface Coordinates {
  longitude: string
  latitude: string
}

enum MagType {
  Md = 'md',
  Ml = 'ml',
  Ms = 'ms',
  Mw = 'mw',
  Me = 'me',
  Mi = 'mi',
  MB = 'mb',
  Mlg = 'mlg',
}

interface Links {
  external_url: string
}

enum Type {
  Feature = 'feature',
}

interface Pagination {
  current_page: number
  total: number
  per_page: number
}
