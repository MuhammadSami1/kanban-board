import { create } from 'zustand'
import Board from '../types/Board'

type GlobalBoard = {
  board: Board[]
  addNewBoard: (boardName: string, boardColumn: string[]) => void
}

const globalBoard = create<GlobalBoard>((set) => ({
  board: [],
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
}))

export default globalBoard
