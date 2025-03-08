import { create } from 'zustand'
import Board from '../types/Board'

type GlobalBoard = {
  board: Board[]
  selectedBoard: number | null
  setSelectedBoard: (boardId: number | null) => void
  addNewBoard: (boardName: string, boardColumn: string[]) => void
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
    }))

  // addNewTask: (title, description, Subtasks, status) => set((state) => ({
  //   board:[
  //     ...state.board{

  //     }
  //   ]
  // }))
}))

export default globalBoard
