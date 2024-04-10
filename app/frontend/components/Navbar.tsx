import { Link } from 'react-router-dom'
import {
  Navbar as Nav,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link as NextLink,
} from '@nextui-org/react'
export default function Navbar() {
  return (
    <Nav>
      <NavbarBrand>
        <Link to='/'>
          <p className='font-bold text-inherit'>Earthquake App</p>
        </Link>
      </NavbarBrand>
      <NavbarContent className='hidden sm:flex gap-4' justify='center'>
        <NavbarItem>
          <NextLink color='foreground' href='#'>
            Features
          </NextLink>
        </NavbarItem>
        <NavbarItem isActive>
          <NextLink href='#' aria-current='page'>
            Customers
          </NextLink>
        </NavbarItem>
        <NavbarItem>
          <NextLink color='foreground' href='#'>
            Integrations
          </NextLink>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify='end'>
        <NavbarItem className='hidden lg:flex'>
          <NextLink href='#'>GitHub</NextLink>
        </NavbarItem>
      </NavbarContent>
    </Nav>
  )
}
