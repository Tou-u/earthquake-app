import { Link } from 'react-router-dom'
import { Link as NextLink } from '@nextui-org/react'

export default function NotFound({ reason }: { reason?: string }) {
  return (
    <main className='dark text-foreground bg-background'>
      <article className='flex flex-col items-center justify-center min-h-svh'>
        <strong>404</strong>
        <h1 className='font-bold text-xl'>
          {reason ? reason : 'Page not found.'}
        </h1>
        <NextLink as={Link} href='/' color='secondary'>
          Go back
        </NextLink>
      </article>
    </main>
  )
}
