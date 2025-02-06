import { useState } from 'react'
import Button from './ui/Button'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { NewTaskForm } from '@/src/types/forms'
import { NewTaskSchema } from '@/src/lib/validation'

type TNewTask = {
  refAddNewTask: React.RefObject<HTMLDivElement>
}

const NewTask = ({ refAddNewTask }: TNewTask) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<NewTaskForm>({
    resolver: yupResolver(NewTaskSchema)
  })
  const [selectedOption, setSelectedOption] = useState('')

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value)
  }
  const onSubmit = (data: NewTaskForm) => {
    console.log('Form data submitted:', data)
  }
  return (
    <div className="fixed h-full inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <motion.div
        className="flex flex-col px-6 bg-foreground w-[350px] sm:w-[450px] lg:w-[500px] rounded-lg py-6"
        initial={{ y: -200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        ref={refAddNewTask}
      >
        <div className="text-lg text-Neutral-Primary font-medium md:font-semibold">
          Add New Task
        </div>

        <form
          className="flex flex-col text-Neutral-Primary gap-y-5 py-3"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col gap-y-1">
            <label htmlFor="title" className="text-xs">
              Title
            </label>
            <input
              type="text"
              placeholder="e.g. Start learning Things"
              {...register('title', { required: true })}
              className="w-full p-2 rounded-md bg-foreground border-[1px] border-Neutral-Secondary focus:outline-none placeholder:text-xs placeholder:text-gray-500"
            />
            {errors.title && (
              <p className="mt-1 text-sm text-red-600">
                {errors.title.message}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-y-1">
            <label htmlFor="description" className="text-xs">
              Description (optional)
            </label>
            <textarea
              placeholder="e.g. Start learning Things"
              {...register('description', { required: true })}
              className="w-full p-2 rounded-md bg-foreground border-[1px] border-Neutral-Secondary focus:outline-none placeholder:text-xs placeholder:text-gray-500"
            ></textarea>
            {errors.description && (
              <p className="mt-1 text-sm text-red-600">
                {errors.description.message}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-y-1">
            <label htmlFor="subtask" className="text-xs">
              Subtasks
            </label>
            <div className="flex justify-between">
              <input
                type="text"
                {...register('subtask', { required: true })}
                className="w-64 sm:w-[350px] lg:w-96 p-2 rounded-md bg-foreground border-[1px] border-Neutral-Secondary focus:outline-none"
              />
              <Button>
                <svg
                  width="15"
                  height="15"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#828FA3"
                >
                  <g fillRule="evenodd">
                    <path d="m12.728 0 2.122 2.122L2.122 14.85 0 12.728z"></path>
                    <path d="M0 2.122 2.122 0 14.85 12.728l-2.122 2.122z"></path>
                  </g>
                </svg>
              </Button>
            </div>
            {errors.subtask && (
              <p className="mt-1 text-sm text-red-600">
                {errors.subtask.message}
              </p>
            )}
          </div>

          <Button
            className="text-Primary-button bg-Neutral-Primary rounded-3xl w-full text-md font-semibold"
            size="lg"
          >
            + Add New Subtask
          </Button>

          <div className="flex flex-col gap-y-1">
            <label htmlFor="status">Status</label>

            <div className="relative text-xs">
              <select
                id="column"
                value={selectedOption}
                {...register('status', {
                  required: true,
                  onChange: (e) => handleChange(e)
                })}
                className="w-full p-2 rounded-md bg-foreground border-[1px] border-Neutral-Secondary focus:outline-none  hover:border-Primary-button appearance-none cursor-pointer shadow-2xl shadow-Primary-buttonDark group"
              >
                <option value="" disabled hidden className="">
                  Select Column
                </option>
                <option value="Option 1">todo</option>
                <option value="Option 2">in progress</option>
                <option value="Option 3">done</option>
              </select>
              {errors.status && (
                <span className="text-red-500 text-xs">
                  {errors.status.message}
                </span>
              )}
            </div>
          </div>

          <Button
            className="bg-Primary-button text-Neutral-Primary rounded-3xl w-full text-md font-semibold"
            size="lg"
            type="submit"
          >
            Create Task
          </Button>
        </form>
      </motion.div>
    </div>
  )
}

export default NewTask
