import React, { useState } from 'react'
import Container from './Container'
import Logo from './Logo'
import Cart from './Cart'
import Profile from './Profile'
import { Link } from 'react-router-dom'
import HumburgerMenu from './HumburgerMenu'
import MobileMenu from './MobileMenu'

const Header = () => {
    const [toggle, setToggle] = useState('menu');
    const [menu, setMenu] = useState('block');
    const [shadow, setShadow] = useState('black');
    const [zIndex, setZIndex] = useState('z-50');
    const colors = ['bg-black', 'bg-white']
    const zindex = ['z-50']

    function handleMenuClick() {
      if (toggle === 'menu') {
        setToggle('close')
        setMenu('block')
        setShadow('black')
        setZIndex('')
      } else {
        setToggle('menu')
        setMenu('hidden')
        setShadow('white')
        setZIndex('z-50')

      }
    }

  return (
    <header className={`h-16 flex items-center justify-center`}>
     <Container className='flex h-full w-96 justify-between'>
        <Container className="flex">
          <MobileMenu
          className={`bg-white absolute h-screen w-64 top-0 left-0 z-20 ${menu} flex flex-col pl-5 pt-16 gap-4 font-medium `}>
            <Link>Connections</Link>
            <Link>Men</Link>
            <Link>Women</Link>
            <Link>About</Link>
            <Link>Contact</Link>
          </MobileMenu>
          <MobileMenu className={`absolute bg-${shadow} opacity-70 top-0 left-0 z-10 w-full h-full`} />
          <Container className="flex gap-4">
            <HumburgerMenu className='relative z-50 w-[18px]' onClick={handleMenuClick} src={`public/images/icon-${toggle}.svg`} />
            <Container className='flex items-center'>
            <Logo src="public/images/logo.svg" />
            </Container>
          </Container>
          </Container>
      <Container className={`flex gap-4 relative ${zIndex}`}>
      <Container className="flex items-center gap-5">
        <Container>
          <Cart src="public/images/icon-cart.svg" />
        </Container>
        <Container className="w-6">
          <Profile src="public/images/image-avatar.png" />
        </Container>
      </Container>
      </Container>
     </Container>
    </header>
  )
}

export default Header