import { Card, CardBody } from '@nextui-org/react'
import { MapContainer, TileLayer, Marker } from 'react-leaflet'

import { Feature } from '../interfaces/Features.ts'
import { formatDate } from '../utils/date.ts'

export default function FeatureInfo({ feature }: { feature: Feature }) {
  const { latitude, longitude } = feature.attribute.coordinates
  return (
    <section className='p-2 flex flex-col sm:flex-row justify-center gap-5'>
      <Card fullWidth classNames={{ body: 'justify-center items-center' }}>
        <CardBody>
          <article className='grid grid-cols-2'>
            <strong>Place:</strong>
            <p>{feature.attribute.place}</p>
            <strong>Magnitude:</strong>
            <p>
              {feature.attribute.magnitude} {feature.attribute.mag_type}
            </p>
            <strong>Time:</strong>
            <p>{formatDate(+feature.attribute.time)}</p>
            <strong>Coordinates:</strong>
            <p>
              [ {feature.attribute.coordinates.latitude},
              {' ' + feature.attribute.coordinates.longitude} ]
            </p>
            <strong>Tsunami:</strong>
            <p>{feature.attribute.tsunami ? 'Yes' : 'No'}</p>
          </article>
        </CardBody>
      </Card>
      <MapContainer
        center={[+latitude, +longitude]}
        zoom={5}
        scrollWheelZoom={false}
        className='aspect-square h-36 sm:w-full sm:h-80 rounded-xl z-0'
      >
        <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
        <Marker position={[+latitude, +longitude]} />
      </MapContainer>
    </section>
  )
}
