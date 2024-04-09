import {
  Card as CardNU,
  CardHeader,
  CardFooter,
  Divider,
  Button,
} from '@nextui-org/react'
import { Feature } from '../interfaces/Features.ts'

export default function Card(feature: Feature) {
  return (
    <a href={`/comments/${feature.id}`} className='w-full'>
      <CardNU
        isHoverable
        fullWidth
        classNames={{ header: 'justify-center', footer: 'justify-center' }}
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
          <Button size='sm' color='secondary'>
            Comments
          </Button>
        </CardFooter>
      </CardNU>
    </a>
  )
}
