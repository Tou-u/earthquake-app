import { Outlet } from 'react-router-dom'
import Navbar from './Navbar.tsx'

export default function Layout() {
  return (
    <>
      <main className='dark text-foreground bg-background min-h-svh pl-[calc(100vw-100%)]'>
        <Navbar />
        <section className='max-w-screen-xl p-2 m-auto'>
          <Outlet />
        </section>
      </main>
    </>
  )
}
