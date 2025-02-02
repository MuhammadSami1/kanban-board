'use client'
import { useEffect, useRef, useState } from 'react'
import Navbar from './Navbar'
import NavbarModel from './NavbarModel'
import Editboard from './shared/Editboard'

const NavbarWrapper = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [edit, setEdit] = useState(false)

  const refMenu = useRef<HTMLDivElement>(null)
  const refEdit = useRef<HTMLDivElement>(null)

  const handleClickEdit = (event: MouseEvent) => {
    if (refEdit.current && !refEdit.current.contains(event.target as Node)) {
      setEdit(false)
    }
  }

  const handleClickMenu = (event: MouseEvent) => {
    if (refMenu.current && !refMenu.current.contains(event.target as Node)) {
      setIsOpen(false)
    }
  }

  const openEdit = () => {
    setEdit((prev) => !prev)
    setIsOpen((prev) => !prev)
  }
  const handleOpen = () => {
    setIsOpen((prev) => !prev)
  }

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickMenu)
    } else {
      document.removeEventListener('mousedown', handleClickMenu)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickMenu)
    }
  }, [isOpen])

  useEffect(() => {
    if (edit) {
      document.addEventListener('mousedown', handleClickEdit)
    } else {
      document.removeEventListener('mousedown', handleClickEdit)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickEdit)
    }
  }, [edit])
  return (
    <div className="relative">
      <Navbar handleOpen={handleOpen} />
      {isOpen && <NavbarModel openEdit={openEdit} refMenu={refMenu} />}
      {edit && <Editboard refEdit={refEdit} />}
    </div>
  )
}

export default NavbarWrapper
