import { create } from 'zustand'
import Board from '../types/Board'
import { v4 as uuidv4 } from 'uuid'

type GlobalBoard = {
  board: Board[]
  selectedBoard: number | null

  setSelectedBoard: (boardId: number | null) => void

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

const globalBoard = create<GlobalBoard>((set) => ({
  board: [],

  selectedBoard: null,

  setSelectedBoard: (boardId) => set({ selectedBoard: boardId }),

  addNewBoard: (boardName, boardColumn) =>
    set((state) => ({
      board: [
        ...state.board,
        {
          id: state.board.length + 1,
          boardName,
          boardColumn: boardColumn.map((column) => ({
            id: uuidv4(),
            name: column,
            task: []
          }))
        }
      ]
    })),

  addNewTask: (boardId, columnName, title, description, status, subtask) =>
    set((state) => ({
      board: state.board.map((board) =>
        board.id === boardId
          ? {
              ...board,
              boardColumn: board.boardColumn.map((column) =>
                column.name === columnName
                  ? {
                      ...column,
                      task: [
                        ...column.task,
                        {
                          id: uuidv4(),
                          title,
                          description,
                          status,
                          subtask: subtask.map((subtaskItem) => ({
                            id: uuidv4(),
                            title: subtaskItem,
                            isCompleted: false
                          }))
                        }
                      ]
                    }
                  : column
              )
            }
          : board
      )
    })),

  updateSubtaskCompletion: (taskId, isCompleted) =>
    set((state) => ({
      board: state.board.map((board) => ({
        ...board,
        boardColumn: board.boardColumn.map((column) => ({
          ...column,
          task: column.task.map((b) => ({
            ...b,
            subtask: b.subtask.map((subtask) =>
              subtask.id === taskId
                ? {
                    ...subtask,
                    isCompleted: isCompleted
                  }
                : subtask
            )
          }))
        }))
      }))
    }))
}))

export default globalBoard
