import { create } from 'zustand'
import Board from '../types/Board'

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
          boardColumn: boardColumn.map((column, i) => ({
            id: i + 1,
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
                          id: column.task.length + 1,
                          title,
                          description,
                          status,
                          subtask: subtask.map((subtaskItem, index) => ({
                            id: index + 1,
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
    }))
}))

export default globalBoard
