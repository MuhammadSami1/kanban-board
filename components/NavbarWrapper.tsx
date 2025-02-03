'use client'
import { useEffect, useRef, useState } from 'react'
import Navbar from './Navbar'
import NavbarModel from './NavbarModel'
import Editboard from './shared/Editboard'
import ClearBoard from './ClearBoard'
import ResetBoard from './ResetBoard'
import DeleteBoard from './deleteBoard'

const NavbarWrapper = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [edit, setEdit] = useState(false)
  const [clearBoard, setClearBoard] = useState(false)
  const [resetBoard, setResetBoard] = useState(false)
  const [deleteBoard, setDeleteBoard] = useState(false)

  const refMenu = useRef<HTMLDivElement>(null)
  const refEdit = useRef<HTMLDivElement>(null)
  const refClear = useRef<HTMLDivElement>(null)
  const refReset = useRef<HTMLDivElement>(null)
  const refDelete = useRef<HTMLDivElement>(null)

  const handleClickEdit = (event: MouseEvent) => {
    if (refEdit.current && !refEdit.current.contains(event.target as Node)) {
      setEdit(false)
    }
  }
  const handleClickClear = (event: MouseEvent) => {
    if (refClear.current && !refClear.current.contains(event.target as Node)) {
      setClearBoard(false)
    }
  }

  const handleClickReset = (event: MouseEvent) => {
    if (refReset.current && !refReset.current.contains(event.target as Node)) {
      setResetBoard(false)
    }
  }

  const handleClickDelete = (event: MouseEvent) => {
    if (
      refDelete.current &&
      !refDelete.current.contains(event.target as Node)
    ) {
      setDeleteBoard(false)
    }
  }

  const handleClickMenu = (event: MouseEvent) => {
    if (refMenu.current && !refMenu.current.contains(event.target as Node)) {
      setIsOpen(false)
    }
  }

  const openDeleteBoard = () => {
    setDeleteBoard((prev) => !prev)
    setIsOpen((prev) => !prev)
  }
  const openResetBoard = () => {
    setResetBoard((prev) => !prev)
    setIsOpen((prev) => !prev)
  }

  const openClearBoard = () => {
    setClearBoard((prev) => !prev)
    setIsOpen((prev) => !prev)
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

  useEffect(() => {
    if (clearBoard) {
      document.addEventListener('mousedown', handleClickClear)
    } else {
      document.removeEventListener('mousedown', handleClickClear)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickClear)
    }
  }, [clearBoard])

  useEffect(() => {
    if (resetBoard) {
      document.addEventListener('mousedown', handleClickReset)
    } else {
      document.removeEventListener('mousedown', handleClickReset)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickReset)
    }
  }, [resetBoard])

  useEffect(() => {
    if (deleteBoard) {
      document.addEventListener('mousedown', handleClickDelete)
    } else {
      document.removeEventListener('mousedown', handleClickDelete)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickDelete)
    }
  }, [deleteBoard])
  return (
    <div className="relative">
      <Navbar handleOpen={handleOpen} />
      {isOpen && (
        <NavbarModel
          openEdit={openEdit}
          refMenu={refMenu}
          openClearBoard={openClearBoard}
          openDeleteBoard={openDeleteBoard}
          openResetBoard={openResetBoard}
        />
      )}
      {edit && <Editboard refEdit={refEdit} />}
      {clearBoard && <ClearBoard refClear={refClear} />}
      {resetBoard && <ResetBoard refReset={refReset} />}
      {deleteBoard && <DeleteBoard refDelete={refDelete} />}
    </div>
  )
}

export default NavbarWrapper
