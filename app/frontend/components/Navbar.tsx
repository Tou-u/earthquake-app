import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Navbar as Nav,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link as NextLink,
  NavbarMenuToggle,
  Button,
  NavbarMenu,
  NavbarMenuItem,
} from '@nextui-org/react'

import IconGithub from '../icons/IconGithub.tsx'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuItems = [
    {
      name: 'Features',
      path: '/api/features',
    },
    {
      name: 'Features/:id',
      path: '/api/features/1',
    },
    {
      name: 'Comments',
      path: '/api/features/1/comments',
    },
  ]
  return (
    <Nav onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className='sm:hidden'
        />
        <NavbarBrand>
          <Link to='/'>
            <p className='font-bold text-inherit'>Earthquake App</p>
          </Link>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className='hidden sm:flex gap-4' justify='center'>
        <strong>API /</strong>
        <NavbarItem>
          <NextLink color='foreground' href='/api/features' isExternal>
            Features
          </NextLink>
        </NavbarItem>
        <NavbarItem>
          <NextLink color='foreground' href='/api/features/1' isExternal>
            Features/:id
          </NextLink>
        </NavbarItem>
        <NavbarItem>
          <NextLink
            color='foreground'
            href='/api/features/1/comments'
            isExternal
          >
            Comments
          </NextLink>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify='end'>
        <NavbarItem>
          <Button
            as={NextLink}
            color='secondary'
            href='https://github.com/Tou-u/earthquake-app'
            variant='flat'
            isExternal
          >
            <IconGithub />
            Source Code
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item) => (
          <NavbarMenuItem key={item.path}>
            <NextLink
              color='foreground'
              className='w-full font-semibold mb-2'
              href={item.path}
              size='lg'
              isExternal
            >
              {item.name}
            </NextLink>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Nav>
  )
}
