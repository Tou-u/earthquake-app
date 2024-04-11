import { Link } from 'react-router-dom'
import {
  Card as CardNU,
  CardHeader,
  CardFooter,
  Divider,
  Button,
} from '@nextui-org/react'

import { Feature } from '../interfaces/Features.ts'

export default function Card({ feature }: { feature: Feature }) {
  return (
    <Link to={`/features/${feature.id}`}>
      <CardNU
        isHoverable
        className='h-full'
        classNames={{
          header: 'justify-center text-center',
          footer: 'justify-center items-end h-full',
        }}
      >
        <CardHeader>
          <div className='flex flex-col items-center'>
            <p className='text-md'>{feature.attribute.title}</p>
            <p className='text-small text-default-500'>
              {Intl.DateTimeFormat('es-CL', {
                dateStyle: 'long',
                timeStyle: 'medium',
                timeZone: 'America/Santiago',
              }).format(+feature.attribute.time)}
            </p>
          </div>
        </CardHeader>
        <Divider />
        <CardFooter>
          <Button size='sm' color='secondary' disableAnimation variant='shadow'>
            Comments
          </Button>
        </CardFooter>
      </CardNU>
    </Link>
  )
}
