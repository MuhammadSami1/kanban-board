import Board from '../types/Board'

type GlobalBoard = {
  board: Board[]
  selectedBoard: number | null

  setSelectedBoard: (boardId: number | null) => void

  deleteBoard: (id: number | null) => void

  deleteTask: (id: number | null) => void

  resetBoard: (id: number | null) => void

  clearBoard: (id: number | null) => void

  addNewBoard: (boardName: string, boardColumn: string[]) => void

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
}

export default GlobalBoard
