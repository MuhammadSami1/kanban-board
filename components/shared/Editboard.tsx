import Button from '../ui/Button'
import { motion } from 'framer-motion'
import { useFieldArray, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { EditForm } from '@/src/types/forms'
import { EditFormSchema } from '@/src/lib/validation'
import useToggleColor from '@/src/store/toggleColor'
import globalBoard from '@/src/store/globalBoard'

type TEditBorad = {
  refEdit: React.RefObject<HTMLDivElement>
  setEdit: (value: boolean | ((prev: boolean) => boolean)) => void
}

const Editboard = ({ refEdit, setEdit }: TEditBorad) => {
  const isOn = useToggleColor((state) => state.isOn)
  const board = globalBoard((state) => state.board)
  const selectedBoard = globalBoard((state) => state.selectedBoard)
  const editBoard = globalBoard((state) => state.editBoard)

  const selectedBoardColumn =
    board.find((b) => b.id === selectedBoard)?.boardColumn || []

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors }
  } = useForm<EditForm>({
    resolver: yupResolver(EditFormSchema),
    defaultValues: {
      boradName: board.find((b) => b.id === selectedBoard)?.boardName || '',
      boradColmn: selectedBoardColumn?.map((column) => ({
        name: column.name
      })) || [{ name: '' }]
    }
  })

  const { append, fields, remove } = useFieldArray({
    control,
    name: 'boradColmn'
  })

  const handleAddColumn = () => {
    append({ name: '' })
  }

  const handleRemoveColumn = (index: number) => {
    remove(index)
  }

  const onSubmit = (data: EditForm) => {
    const id = selectedBoard

    if (id) {
      editBoard(
        id,
        data.boradName,
        data.boradColmn.map((column, index) => ({
          id: selectedBoardColumn[index]?.id || '',
          name: column.name,
          task: selectedBoardColumn[index]?.task || []
        }))
      )
    }
    reset()
    setEdit((prev) => !prev)
  }

  return (
    <div className="fixed inset-0 flex h-full items-center justify-center bg-black bg-opacity-50">
      <motion.div
        initial={{ y: -200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className={`${isOn ? 'bg-Neutral-Primary' : 'bg-foreground'} flex w-[350px] flex-col rounded-lg px-6 py-6 sm:w-[450px] lg:w-[500px]`}
        ref={refEdit}
      >
        <div
          className={`${isOn ? 'text-Neutral-tertiary' : 'text-Neutral-Primary'} text-lg font-semibold`}
        >
          Edit Borad
        </div>

        {/* Forms */}
        <form
          className={`${isOn ? 'text-Neutral-Secondary' : 'text-Neutral-Primary'} flex flex-col  pt-1`}
          onSubmit={handleSubmit(onSubmit)}
        >
          <label htmlFor="BoardName" className="text-xs">
            Borad Name
          </label>
          <input
            type="text"
            {...register('boradName', { required: true })}
            className={`${isOn ? 'bg-Neutral-Primary' : 'border-gray-600 bg-foreground'} w-full rounded-md border-[1px] p-2 focus:outline-none`}
          />
          {errors.boradName && (
            <p className="mt-1 text-sm text-red-600">
              {errors.boradName.message}
            </p>
          )}
          <div className="pb-3 pt-4">
            <label htmlFor="BoradColumn" className="text-xs">
              Borad Column
            </label>

            <div className="flex flex-col gap-y-4">
              {fields.map((column, i) => (
                <div className="space-y-4" key={column.id}>
                  <div className="flex justify-between">
                    <input
                      type="text"
                      {...register(`boradColmn.${i}.name`, { required: true })}
                      className={`${isOn ? 'bg-Neutral-Primary' : 'border-gray-600 bg-foreground'} w-64 rounded-md border-[1px] p-2 focus:outline-none sm:w-[350px] lg:w-96`}
                    />

                    <Button onClick={() => handleRemoveColumn(i)}>
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
                  {errors.boradColmn?.[i]?.name && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.boradColmn?.[i]?.name.message}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-y-4">
            <Button
              className={`${isOn ? 'bg-Neutral-forth' : 'bg-Neutral-Primary'} w-full rounded-3xl font-semibold text-Primary-button`}
              size="lg"
              onClick={handleAddColumn}
            >
              + Add New Column
            </Button>
            <Button
              variant="button"
              className="w-full rounded-3xl font-semibold"
              size="lg"
              type="submit"
            >
              Save Changes
            </Button>
          </div>
        </form>
      </motion.div>
    </div>
  )
}

export default Editboard
