type SubTask = {
  id: number | string
  title: string
  isCompleted: boolean
}

type Task = {
  id: number | string
  title: string
  description: string
  status: string
  subtask: SubTask[]
}

export type BoardColumn = {
  id: number | string
  name: string
  task: Task[]
}

type Board = {
  id: number
  boardName: string
  boardColumn: BoardColumn[]
}

export default Board
