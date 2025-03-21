import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import boardData from '@/src/data/boardData.json'
import GlobalBoard from '../types/globalBoard'
import { arrayMove } from '@dnd-kit/sortable'

const globalBoard = create<GlobalBoard>()(
  persist(
    (set) => ({
      board: boardData.board,
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
                              subtask: subtask.map((subtaskItem, i) => ({
                                id: i + 1,
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
        })),

      deleteBoard: (id) =>
        set((state) => ({
          board: state.board.filter((items) => items.id != id)
        })),

      deleteTask: (id) =>
        set((state) => ({
          board: state.board.map((board) => ({
            ...board,
            boardColumn: board.boardColumn.map((column) => ({
              ...column,
              task: column.task.filter((task) => task.id !== id)
            }))
          }))
        })),

      resetBoard: (id) =>
        set((state) => ({
          board: state.board.filter((board) => board.id !== id)
        })),

      clearBoard: (id) =>
        set((state) => ({
          board: state.board.map((board) =>
            board.id === id
              ? {
                  ...board,
                  boardColumn: []
                }
              : board
          )
        })),

      editBoard: (id, boradName, boradColmn) =>
        set((state) => ({
          board: state.board.map((board) =>
            board.id === id
              ? {
                  ...board,
                  boardName: boradName,
                  boardColumn: boradColmn
                }
              : board
          )
        })),

      editTask: (taskTitle, taskDescription, taskId, subtask) =>
        set((state) => ({
          board: state.board.map((board) => ({
            ...board,
            boardColumn: board.boardColumn.map((column) => ({
              ...column,
              task: column.task.map((task) =>
                task.id === taskId
                  ? {
                      ...task,
                      title: taskTitle,
                      description: taskDescription,
                      subtask: task.subtask.map((b, index) => ({
                        ...b,
                        title: subtask[index]?.title || b.title
                      }))
                    }
                  : task
              )
            }))
          }))
        })),

      moveTaskWithinColumn: (boardId, columnId, activeId, overId) =>
        set((state) => ({
          board: state.board.map((board) =>
            board.id === boardId
              ? {
                  ...board,
                  boardColumn: board.boardColumn.map((column) =>
                    column.id === columnId
                      ? {
                          ...column,
                          task: arrayMove(
                            column.task,
                            column.task.findIndex(
                              (task) => task.id === activeId
                            ),
                            column.task.findIndex((task) => task.id === overId)
                          )
                        }
                      : column
                  )
                }
              : board
          )
        }))
    }),
    {
      name: 'global-board-storage', // Unique name for the local storage key
      storage: createJSONStorage(() => localStorage) // Use localStorage with JSON serialization
    }
  )
)

export default globalBoard
