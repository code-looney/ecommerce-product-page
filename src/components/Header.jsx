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
    const colors = ['bg-black', 'bg-white']

    function handleMenuClick() {
      if (toggle === 'menu') {
        setToggle('close')
        setMenu('block')
        setShadow('black')
      } else {
        setToggle('menu')
        setMenu('hidden')
        setShadow('white')

      }
    }

  return (
    <header className={`outline h-12 flex items-center`}>
     <Container className='flex h-full gap-2 items-center'>
        <MobileMenu
        className={` bg-white absolute h-screen w-48 top-0 left-0 z-20 ${menu} flex flex-col pl-4 pt-16 gap-4`}>
          <Link>Connections</Link>
          <Link>Men</Link>
          <Link>Women</Link>
          <Link>About</Link>
          <Link>Contact</Link>
        </MobileMenu>
        <MobileMenu className={`absolute bg-${shadow} opacity-25 top-0 left-0 z-10 w-full h-full`} />
      <Container  className='flex gap-4 items-end'>
        <HumburgerMenu className='relative z-50 w-[18px]' onClick={handleMenuClick} src={`public/images/icon-${toggle}.svg`} />
      <Container className=''>
        <Logo src="public/images/logo.svg" />
      </Container>
      </Container>
     </Container>
    </header>
  )
}

export default Header