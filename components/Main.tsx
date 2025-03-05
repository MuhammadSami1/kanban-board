'use client'
import { motion } from 'framer-motion'
import Button from './ui/Button'
import Editboard from './shared/Editboard'
import { useEffect, useRef, useState } from 'react'
import useToggleColor from '@/src/store/toggleColor'
import SubTask from './SubTask'
import SubTaskModel from './SubTaskModel'
import DeleteBoard from './deleteBoard'
const Main = () => {
  const [edit, setEdit] = useState(false)
  const [openSubTask, setOpenSubTask] = useState(false)
  const [openSubTaskModel, setOpenSubTaskModel] = useState(false)
  const [openDeleteBoard, setOpenDeleteBoard] = useState(false)
  const isOn = useToggleColor((state) => state.isOn)

  const refEdit = useRef<HTMLDivElement>(null)
  const refSubTask = useRef<HTMLDivElement>(null)
  const refSubTaskModel = useRef<HTMLDivElement>(null)

  const openDeleteBoardModel = () => {
    setOpenDeleteBoard((prev) => !prev)
  }

  const handleOpenSubTaskModel = () => {
    setOpenSubTaskModel((prev) => !prev)
  }

  const handleOpenSubTask = () => {
    setOpenSubTask((prev) => !prev)
  }

  const openEdit = () => {
    setEdit((prev) => !prev)
  }

  const handleClickSubTask = (event: MouseEvent) => {
    if (
      refSubTask.current &&
      !refSubTask.current.contains(event.target as Node)
    ) {
      setOpenSubTask(false)
    }
  }

  const handleClickEdit = (event: MouseEvent) => {
    if (refEdit.current && !refEdit.current.contains(event.target as Node)) {
      setEdit(false)
    }
  }

  const handleClickSubTaskModel = (event: MouseEvent) => {
    if (
      refSubTaskModel.current &&
      !refSubTaskModel.current.contains(event.target as Node)
    ) {
      setOpenSubTaskModel(false)
    }
  }

  useEffect(() => {
    if (openSubTask) {
      document.addEventListener('mousedown', handleClickSubTask)
    } else {
      document.removeEventListener('mousedown', handleClickSubTask)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickSubTask)
    }
  }, [openSubTask])

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
    let timeoutId: NodeJS.Timeout
    if (openSubTaskModel) {
      timeoutId = setTimeout(() => {
        document.addEventListener('mousedown', handleClickSubTaskModel)
      }, 450)
    }

    return () => {
      clearTimeout(timeoutId)
      document.removeEventListener('mousedown', handleClickSubTaskModel)
    }
  }, [openSubTaskModel])

  return (
    <>
      <motion.div
        className={`${isOn ? 'bg-Neutral-fifth' : 'bg-background'} flex h-full min-w-max gap-x-6 p-6`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="flex gap-x-6">
          {/* tasks */}
          <div className="w-72 space-y-6">
            <div className="flex items-center gap-x-2">
              <div className="h-4 w-4 rounded-full bg-yellow-400"></div>
              <h2 className="text-Neutral-Secondary">Todo (2)</h2>
            </div>

            <div onClick={handleOpenSubTask} className="cursor-pointer">
              <div
                className={`${isOn ? 'bg-Neutral-Primary shadow-sm' : 'bg-foreground shadow-lg'} space-y-2 rounded-lg p-4 font-semibold shadow-Primary-buttonDark`}
              >
                <h3
                  className={`${isOn ? 'text-Neutral-tertiary' : 'text-Neutral-Primary'} whitespace-normal break-words text-sm transition-all duration-300 hover:text-Primary-button`}
                >
                  Lorem ipsum dolor
                </h3>
                <h4 className="text-xs text-Neutral-Secondary">
                  2 of 3 subtasks
                </h4>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`flex min-w-64 items-center justify-center self-stretch rounded-lg transition-all duration-500 ease-in-out hover:scale-105 ${isOn ? 'bg-Neutral-sixth' : 'backgroundOpacity bg-Neutral-forth'} `}
          onClick={openEdit}
        >
          <Button className="h-full w-full text-xl font-semibold text-Neutral-Secondary">
            <span>+New Column</span>
          </Button>
        </div>
      </motion.div>
      {edit && <Editboard refEdit={refEdit} />}
      {openSubTask && (
        <SubTask
          refSubTask={refSubTask}
          handleOpenSubTaskModel={handleOpenSubTaskModel}
        />
      )}
      {openSubTaskModel && (
        <SubTaskModel
          refSubTaskModel={refSubTaskModel}
          openDeleteBoardModel={openDeleteBoardModel}
        />
      )}
      {openDeleteBoard && <DeleteBoard />}
    </>
  )
}

export default Main
