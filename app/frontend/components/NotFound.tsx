import { Link } from '@nextui-org/react'

export default function NotFound() {
  return (
    <article className='flex flex-col items-center justify-center h-svh'>
      <h1 className='font-bold text-xl'>Feature not found.</h1>
      <Link href='/' color='secondary'>
        Go back
      </Link>
    </article>
  )
}
