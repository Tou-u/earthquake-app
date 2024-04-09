import { Spinner } from '@nextui-org/react'

export default function LoadingSpinner({ title }: { title: string }) {
  return (
    <Spinner
      label={title}
      color='secondary'
      labelColor='secondary'
      size='lg'
      className='animate-appearance-in'
    />
  )
}
