import { Link } from '@nextui-org/react'
import { useRouteError } from 'react-router-dom'

export default function NotFound({ reason }: { reason?: string }) {
  const error = useRouteError()
  console.log(error)
  return (
    <main className='dark text-foreground bg-background'>
      <article className='flex flex-col items-center justify-center min-h-svh'>
        <strong>404</strong>
        <h1 className='font-bold text-xl'>
          {reason ? reason : 'Page not found.'}
        </h1>
        <Link href='/' color='secondary'>
          Go back
        </Link>
      </article>
    </main>
  )
}
