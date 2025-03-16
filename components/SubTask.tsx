import globalBoard from '@/src/store/globalBoard'
import { motion } from 'framer-motion'
type TEditBoard = {
  refSubTask: React.RefObject<HTMLDivElement>
  handleOpenSubTaskModel: () => void
  taskId: string | null // Add taskId as a prop
}

const SubTask = ({
  refSubTask,
  handleOpenSubTaskModel,
  taskId
}: TEditBoard) => {
  const board = globalBoard((state) => state.board)
  const selectedBoard = globalBoard((state) => state.selectedBoard)
  const updateSubtaskCompletion = globalBoard(
    (state) => state.updateSubtaskCompletion
  )

  const selectedBoardColumn =
    board.find((b) => b.id === selectedBoard)?.boardColumn || []

  // Find the specific task
  const task = selectedBoardColumn
    .flatMap((column) => column.task)
    .find((task) => task.id === taskId)

  if (!task) {
    return null // Handle case where task is not found
  }

  const handleCheckboxChange = (
    subtaskId: string | number,
    isCompleted: boolean
  ) => {
    updateSubtaskCompletion(subtaskId, !isCompleted)
  }

  return (
    <div className="fixed inset-0 flex h-full items-center justify-center bg-black bg-opacity-50">
      <motion.div
        initial={{ y: -200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="bg-Neutral-Primary flex w-[350px] flex-col rounded-lg px-6 py-6 sm:w-[450px] lg:w-[500px]"
        ref={refSubTask}
      >
        <div>
          <div className="text-md font-semibold flex items-center justify-between">
            <div className="max-w-80 whitespace-normal">{task.title}</div>
            <div onClick={handleOpenSubTaskModel}>
              <svg
                width="5"
                height="20"
                xmlns="http://www.w3.org/2000/svg"
                className="cursor-pointer"
              >
                <g fill="#828FA3" fillRule="evenodd">
                  <circle cx="2.308" cy="2.308" r="2.308" />
                  <circle cx="2.308" cy="10" r="2.308" />
                  <circle cx="2.308" cy="17.692" r="2.308" />
                </g>
              </svg>
            </div>
          </div>
          <div className="whitespace-normal text-xs text-Neutral-Secondary py-4">
            {task.description}
          </div>
          <div className="text-Neutral-Secondary">
            <div className="text-xs font-semibold">
              Subtasks (
              {task.subtask.filter((subtask) => subtask.isCompleted).length} of{' '}
              {task.subtask.length})
            </div>

            {task.subtask.map((subtask) => (
              <div
                className="flex flex-col gap-y-2 my-4 text-sm text-Neutral-tertiary"
                key={subtask.id}
              >
                <div
                  className="flex gap-x-3 p-3 rounded-md bg-Form-Primary transition-all duration-500 ease-in-out"
                  id="subTask"
                >
                  <input
                    type="checkbox"
                    name="subTaskCheckbox"
                    id="subTaskCheckbox"
                    checked={subtask.isCompleted}
                    className="accent-CheckBox-Primary"
                    onChange={() =>
                      handleCheckboxChange(subtask.id, subtask.isCompleted)
                    }
                  />
                  <div>{subtask.title}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="relative text-xs">
            <div className="text-Neutral-Secondary font-bold py-2">
              Current Status
            </div>
            <select
              id="subTaskColumn"
              className="bg-Neutral-Primary border-gray-300 group w-full cursor-pointer appearance-none rounded-md border-[1px] p-3 hover:border-Primary-button focus:outline-none"
            >
              <option value="" disabled hidden>
                Select Column
              </option>
              {selectedBoardColumn.map((column) => (
                <option key={column.id} value={column.name}>
                  {column.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default SubTask
