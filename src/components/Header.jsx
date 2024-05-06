import React, { useState } from 'react'
import Container from './Container'
import Logo from './Logo'
import Cart from './Cart'
import Profile from './Profile'
import { Link } from 'react-router-dom'
import HumburgerMenu from './HumburgerMenu'
import MobileMenu from './MobileMenu'
import DeskMenu from './DeskMenu'

const Header = () => {
  const [toggle, setToggle] = useState('menu');
  const [menu, setMenu] = useState('hidden');
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
    <header className={`h-16 flex items-center justify-center ou`}>
     <Container className='flex h-full w-full px-5 md:px-20 justify-between'>
        <Container className="flex">
          <MobileMenu
          className={`bg-white absolute h-screen w-64 top-0 left-0 z-50 ${menu} flex flex-col pl-5 pt-16 gap-4 font-medium md:hidden `}>
            <Link>Connections</Link>
            <Link>Men</Link>
            <Link>Women</Link>
            <Link>About</Link>
            <Link>Contact</Link>
          </MobileMenu>
            <MobileMenu className={`absolute bg-${shadow} ${menu} opacity-70 top-0 left-0 z-10 w-full h-full md:hidden`} />
          <Container className="flex items-center gap-4"> 
            <HumburgerMenu className='relative z-50 w-[18px] md:hidden' onClick={handleMenuClick} src={`public/images/icon-${toggle}.svg`} />
          <Container className='flex items-center'>
            <Logo src="public/images/logo.svg" />
          </Container>
          <DeskMenu className='hidden md:flex md:gap-5 pl-10 text-[14px] h-full'>
            <Link className='hover:border-b-violet-600 border-b-4 border-transparent h-full flex items-center'>Connections</Link>
              <Link className='hover:border-b-violet-600 border-b-4 border-transparent h-full flex items-center'>Men</Link>
              <Link className='hover:border-b-violet-600 border-b-4 border-transparent h-full flex items-center'>Women</Link>
              <Link className='hover:border-b-violet-600 border-b-4 border-transparent h-full flex items-center'>About</Link>
              <Link className='hover:border-b-violet-600 border-b-4 border-transparent h-full flex items-center'>Contact</Link>
          </DeskMenu>
        </Container>
      </Container>
      <Container className={`flex gap-4 relative ${zIndex}`}>
        <Container className="flex items-center gap-5">
          <Container className="w-4">
            <Cart src="public/images/icon-cart.svg" />
          </Container>
          <Container className="w-6 md:w-8">
            <Profile src="public/images/image-avatar.png" />
          </Container>
        </Container>
      </Container>
     </Container>
    </header>
  )
}

export default Header