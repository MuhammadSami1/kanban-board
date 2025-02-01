'use client'
import { useState } from 'react'
import Navbar from './Navbar'
import NavbarModel from './NavbarModel'
import Editboard from './shared/Editboard'

const NavbarWrapper = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [edit, setEdit] = useState(false)
  const openEdit = () => {
    setEdit(!edit)
  }
  const handleOpen = () => {
    setIsOpen((prev) => !prev)
  }
  return (
    <div className="relative">
      <Navbar handleOpen={handleOpen} />
      {isOpen && <NavbarModel openEdit={openEdit} setIsOpen={setIsOpen} />}
      {edit && <Editboard />}
    </div>
  )
}

export default NavbarWrapper
