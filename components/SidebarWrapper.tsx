'use client'
import { useEffect, useRef, useState } from 'react'
import NewBoard from './NewBoard'
import Sidebar from './Sidebar'

const SidebarWrapper = () => {
  const [openNewBoard, setOpenNewBoard] = useState(false)
  const refNewBoard = useRef<HTMLDivElement>(null)

  const handleOpenNewBoard = () => {
    setOpenNewBoard((prev) => !prev)
  }

  const handleNewBoard = (event: MouseEvent) => {
    if (
      refNewBoard.current &&
      !refNewBoard.current.contains(event.target as Node)
    ) {
      setOpenNewBoard(false)
    }
  }
  useEffect(() => {
    if (openNewBoard) {
      document.addEventListener('mousedown', handleNewBoard)
    } else {
      document.removeEventListener('mousedown', handleNewBoard)
    }

    return () => {
      document.removeEventListener('mousedown', handleNewBoard)
    }
  }, [openNewBoard])

  return (
    <>
      <Sidebar handleOpenNewBoard={handleOpenNewBoard} />
      {openNewBoard && <NewBoard refNewBoard={refNewBoard} />}
    </>
  )
}

export default SidebarWrapper
