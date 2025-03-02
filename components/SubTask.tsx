import { motion } from 'framer-motion'
import React, { useState } from 'react'

type TEditBorad = {
  refSubTask: React.RefObject<HTMLDivElement>
}

const SubTask = ({ refSubTask }: TEditBorad) => {
  const [selectedOption, setSelectedOption] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(e.target.value)
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
        <div className="text-md font-semibold flex items-center justify-between">
          <div className="max-w-80 whitespace-normal">
            Research pricing points of various competitors and trial different
            business models
          </div>
          <div>
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
          We know what we're planning to build for version one. Now we need to
          finalise the first pricing model we'll use. Keep iterating the
          subtasks until we have a coherent proposition.
        </div>

        <div className="text-Neutral-Secondary">
          <div className="text-xs font-semibold">Subtasks (2 of 3)</div>

          <div className="flex flex-col gap-y-2 my-4 text-sm text-Neutral-tertiary">
            <div
              className="flex gap-x-3  p-3 rounded-md bg-Form-Primary transition-all duration-500 ease-in-out"
              id="subTask"
            >
              <input
                type="checkbox"
                name="subTaskCheckbox"
                id="subTaskCheckbox"
                className="accent-CheckBox-Primary"
              />

              <div>Math</div>
            </div>
          </div>
        </div>

        <div className="relative text-xs">
          <div className="text-Neutral-Secondary font-bold py-2">
            Current Status
          </div>
          <select
            id="subTaskColumn"
            value={selectedOption}
            onChange={(e) => handleChange(e)}
            className="bg-Neutral-Primary border-gray-300 group w-full cursor-pointer appearance-none rounded-md border-[1px] p-3  hover:border-Primary-button focus:outline-none"
          >
            <option value="" disabled hidden>
              Select Column
            </option>
            <option value="Option 1">todo</option>
            <option value="Option 2">in progress</option>
            <option value="Option 3">done</option>
          </select>
        </div>
      </motion.div>
    </div>
  )
}

export default SubTask
