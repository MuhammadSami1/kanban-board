export type EditForm = {
  boradName: string
  boradColmn: { name: string }[]
}

export type NewTaskForm = {
  title: string
  description: string
  subtask: { title: string }[]
  status: string
}

export type AddNewBoardForm = {
  boradName: string
  boradColmn: { name: string }[]
}
