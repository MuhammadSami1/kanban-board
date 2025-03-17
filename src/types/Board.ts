export type SubTask = {
  id: number
  title: string
  isCompleted: boolean
}

type Task = {
  id: number
  title: string
  description: string
  status: string
  subtask: SubTask[]
}

export type BoardColumn = {
  id: number
  name: string
  task: Task[]
}

type Board = {
  id: number
  boardName: string
  boardColumn: BoardColumn[]
}

export default Board
