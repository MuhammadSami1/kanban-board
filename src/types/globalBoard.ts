import Board, { BoardColumn } from '../types/Board'

type GlobalBoard = {
  board: Board[]
  selectedBoard: number | null

  setSelectedBoard: (boardId: number | null) => void

  deleteBoard: (id: number | null) => void

  deleteTask: (id: number | null) => void

  resetBoard: (id: number | null) => void

  clearBoard: (id: number | null) => void

  editBoard: (id: number, boradName: string, boradColmn: BoardColumn[]) => void

  addNewBoard: (boardName: string, boardColumn: string[]) => void

  editTask: (
    taskTitle: string,
    taskDescription: string,
    taskId: number,
    subtask: { title: string }[]
  ) => void

  addNewTask: (
    boardId: number,
    columnName: string,
    title: string,
    description: string,
    status: string,
    subtask: string[]
  ) => void

  updateSubtaskCompletion: (
    taskId: string | number,
    isCompleted: boolean
  ) => void

  moveTaskWithinColumn: (
    boardId: number | string,
    columnId: number | string,
    activeId: number | string,
    overId: number | string
  ) => void
}

export default GlobalBoard
