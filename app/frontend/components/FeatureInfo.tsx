import { Feature } from '../interfaces/Features.ts'
import { Card, CardBody } from '@nextui-org/react'
import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

export default function FeatureInfo({ feature }: { feature: Feature }) {
  const { latitude, longitude } = feature.attribute.coordinates
  return (
    <section className='p-2 flex justify-center gap-5'>
      <Card classNames={{ body: 'justify-center' }} className='border-1'>
        <CardBody>
          <article className='grid grid-cols-2'>
            <strong>Place:</strong>
            <p>{feature.attribute.place}</p>
            <strong>Magnitude:</strong>
            <p>
              {feature.attribute.magnitude} {feature.attribute.mag_type}
            </p>
            <strong>Time:</strong>
            <p>
              {Intl.DateTimeFormat('es-CL', {
                dateStyle: 'long',
                timeStyle: 'medium',
                timeZone: 'America/Santiago',
              }).format(+feature.attribute.time)}
            </p>
            <strong>Coordinates:</strong>
            <p>
              [{feature.attribute.coordinates.latitude},
              {feature.attribute.coordinates.longitude}]
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
        className='size-72 rounded-xl border-1'
      >
        <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
        <Marker position={[+latitude, +longitude]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </section>
  )
}
