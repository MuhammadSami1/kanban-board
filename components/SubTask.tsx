import globalBoard from '@/src/store/globalBoard'
import { motion } from 'framer-motion'

type TEditBorad = {
  refSubTask: React.RefObject<HTMLDivElement>
  handleOpenSubTaskModel: () => void
}

const SubTask = ({ refSubTask, handleOpenSubTaskModel }: TEditBorad) => {
  const board = globalBoard((state) => state.board)
  const selectedBoard = globalBoard((state) => state.selectedBoard)
  const updateSubtaskCompletion = globalBoard(
    (state) => state.updateSubtaskCompletion
  )

  const selectedBoardColumn =
    board
      .find((b) => b.id === selectedBoard)
      ?.boardColumn.map((item) => item) || []

  const handleCheckboxChange = (
    taskId: string | number,
    isCompleted: boolean
  ) => {
    updateSubtaskCompletion(taskId, !isCompleted)
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
        {selectedBoardColumn.map((items) => (
          <div key={items.id}>
            {items.task.map((item) => (
              <div key={item.id}>
                <div className="text-md font-semibold flex items-center justify-between">
                  <div className="max-w-80 whitespace-normal">{item.title}</div>
                  <div onClick={handleOpenSubTaskModel}>
                    <svg
                      width="5"
                      height="20"
                      xmlns="http://www.w3.org/2000/svg"
                      className="cursor-pointer"
                    >
                      <g fill="#828FA3" fillRule="evenodd">
                        <circle cx="2.308" cy="2.308" r="2.308"></circle>
                        <circle cx="2.308" cy="10" r="2.308"></circle>
                        <circle cx="2.308" cy="17.692" r="2.308"></circle>
                      </g>
                    </svg>
                  </div>
                </div>
                <div className="whitespace-normal text-xs text-Neutral-Secondary py-4">
                  {item.description}
                </div>
                <div className="text-Neutral-Secondary">
                  <div className="text-xs font-semibold">
                    Subtasks ({item.subtask.length} of 3)
                  </div>

                  {item.subtask.map((task) => (
                    <div
                      className="flex flex-col gap-y-2 my-4 text-sm text-Neutral-tertiary"
                      key={task.id}
                    >
                      <div
                        className="flex gap-x-3  p-3 rounded-md bg-Form-Primary transition-all duration-500 ease-in-out"
                        id="subTask"
                      >
                        <input
                          type="checkbox"
                          name="subTaskCheckbox"
                          id="subTaskCheckbox"
                          checked={task.isCompleted}
                          className="accent-CheckBox-Primary"
                          onChange={() =>
                            handleCheckboxChange(task.id, task.isCompleted)
                          }
                        />

                        <div>{task.title}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
            <div className="relative text-xs">
              <div className="text-Neutral-Secondary font-bold py-2">
                Current Status
              </div>
              <select
                id="subTaskColumn"
                className="bg-Neutral-Primary border-gray-300 group w-full cursor-pointer appearance-none rounded-md border-[1px] p-3  hover:border-Primary-button focus:outline-none"
              >
                <option value="" disabled hidden>
                  Select Column
                </option>
                <option value={items.name}>{items.name}</option>
              </select>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default SubTask
