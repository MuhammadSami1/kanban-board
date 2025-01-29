'use client'
import { useState } from 'react'
import Navbar from './Navbar'
import NavbarModel from './NavbarModel'

const NavbarWrapper = () => {
  const [isOpen, setIsOpen] = useState(false)
  const handleOpen = () => {
    setIsOpen((prev) => !prev)
  }
  return (
    <div className="relative">
      <Navbar handleOpen={handleOpen} />
      {isOpen && <NavbarModel />}
    </div>
  )
}

export default NavbarWrapper
