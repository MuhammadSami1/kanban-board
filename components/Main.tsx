'use client'
import { motion } from 'framer-motion'
import Button from './ui/Button'
import Editboard from './shared/Editboard'
import { useEffect, useMemo, useRef, useState } from 'react'
import useToggleColor from '@/src/store/toggleColor'
import SubTask from './SubTask'
import SubTaskModel from './SubTaskModel'

import globalBoard from '@/src/store/globalBoard'
import NewTaskDeleteBoard from './NewTaskDeleteBoard'
import EditTask from './EditTask'
import SortableTask from './SortableTask'
import {
  closestCenter,
  DndContext,
  DragEndEvent,
  KeyboardSensor,
  PointerSensor,
  TouchSensor,
  useSensor,
  useSensors
} from '@dnd-kit/core'
import {
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy
} from '@dnd-kit/sortable'

const Main = () => {
  const [edit, setEdit] = useState(false)
  const [openSubTask, setOpenSubTask] = useState(false)
  const [openSubTaskModel, setOpenSubTaskModel] = useState(false)
  const [openDeleteBoard, setOpenDeleteBoard] = useState(false)
  const [editModel, setEditModel] = useState(false)
  const [selectedTaskId, setSelectedTaskId] = useState<number | null>(null)

  const isOn = useToggleColor((state) => state.isOn)
  const board = globalBoard((state) => state.board)
  const selectedBoard = globalBoard((state) => state.selectedBoard)

  const moveTaskWithinColumn = globalBoard(
    (state) => state.moveTaskWithinColumn
  )

  const refEdit = useRef<HTMLDivElement>(null)
  const refSubTask = useRef<HTMLDivElement>(null)
  const refSubTaskModel = useRef<HTMLDivElement>(null)
  const refDelete = useRef<HTMLDivElement>(null)
  const refEditModel = useRef<HTMLDivElement>(null)

  const selectedBoardColumn = useMemo(() => {
    return board.find((items) => items.id === selectedBoard)?.boardColumn || []
  }, [board, selectedBoard])

  const onDragEnd = (event: DragEndEvent) => {
    const { active, over } = event

    if (!over) return

    if (active.id === over.id) return

    const selectedBoardData = board.find((b) => b.id === selectedBoard)
    if (!selectedBoardData) return

    const column = selectedBoardData.boardColumn.find((col) =>
      col.task.some((task) => task.id === active.id)
    )
    if (!column) return

    if (selectedBoard !== null) {
      moveTaskWithinColumn(selectedBoard, column.id, active.id, over.id)
    }
  }
  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 5 } }),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates
    })
  )

  function getRandomColor() {
    const red = Math.floor(Math.random() * 256)
    const green = Math.floor(Math.random() * 256)
    const blue = Math.floor(Math.random() * 256)
    return `rgb(${red}, ${green}, ${blue})`
  }
  const boardColors = useMemo(() => {
    return selectedBoardColumn.map(() => getRandomColor())
  }, [selectedBoardColumn])

  const openEditModel = () => {
    setEditModel((prev) => !prev)
    setOpenSubTaskModel((prev) => !prev)
  }

  const openDeleteBoardModel = () => {
    setOpenDeleteBoard((prev) => !prev)
    setOpenSubTaskModel((prev) => !prev)
  }

  const handleOpenSubTaskModel = () => {
    setOpenSubTaskModel((prev) => !prev)
  }

  const handleClickEditModel = (event: MouseEvent) => {
    if (
      refEditModel.current &&
      !refEditModel.current.contains(event.target as Node)
    ) {
      setEditModel(false)
    }
  }

  const handleOpenSubTask = (taskId: number | null) => {
    setSelectedTaskId(taskId)
    setOpenSubTask((prev) => !prev)
  }

  const handleClickDelete = (event: MouseEvent) => {
    if (
      refDelete.current &&
      !refDelete.current.contains(event.target as Node)
    ) {
      setOpenDeleteBoard(false)
    }
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

  useEffect(() => {
    if (editModel) {
      document.addEventListener('mousedown', handleClickEditModel)
    } else {
      document.removeEventListener('mousedown', handleClickEditModel)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickEditModel)
    }
  }, [editModel])

  useEffect(() => {
    if (openDeleteBoard) {
      document.addEventListener('mousedown', handleClickDelete)
    } else {
      document.removeEventListener('mousedown', handleClickDelete)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickDelete)
    }
  }, [openDeleteBoard])
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

          {selectedBoardColumn.map((board, index) => (
            <div className="w-72 space-y-6" key={board.id}>
              <div className="flex items-center gap-x-2">
                <div
                  className="h-4 w-4 rounded-full"
                  style={{ backgroundColor: boardColors[index] }}
                ></div>
                <h2 className="text-Neutral-Secondary">
                  {`${board.name} (${board.task?.length})`}
                </h2>
              </div>
              <DndContext
                collisionDetection={closestCenter}
                onDragEnd={onDragEnd}
                sensors={sensors}
              >
                <SortableContext
                  items={board.task.map((task) => task.id)}
                  strategy={verticalListSortingStrategy}
                >
                  {board.task.map((item) => (
                    <SortableTask
                      key={item.id}
                      id={item.id}
                      title={item.title}
                      handleOpenSubTask={() => handleOpenSubTask(item.id)}
                      totalLength={item.subtask ? item.subtask.length : 0}
                      length={
                        item.subtask.filter((subtask) => subtask.isCompleted)
                          .length
                      }
                    />
                  ))}
                </SortableContext>
              </DndContext>
            </div>
          ))}
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

      {edit && selectedBoard && (
        <Editboard refEdit={refEdit} setEdit={setEdit} />
      )}

      {openSubTask && (
        <SubTask
          refSubTask={refSubTask}
          handleOpenSubTaskModel={handleOpenSubTaskModel}
          taskId={selectedTaskId}
        />
      )}

      {openSubTaskModel && (
        <SubTaskModel
          refSubTaskModel={refSubTaskModel}
          openDeleteBoardModel={openDeleteBoardModel}
          openEditModel={openEditModel}
        />
      )}

      {openDeleteBoard && (
        <NewTaskDeleteBoard
          refDelete={refDelete}
          setDeleteBoard={setOpenDeleteBoard}
          id={selectedTaskId}
        />
      )}

      {editModel && (
        <EditTask
          refEdit={refEditModel}
          taskId={selectedTaskId}
          setEdit={setEditModel}
        />
      )}
    </>
  )
}

export default Main
