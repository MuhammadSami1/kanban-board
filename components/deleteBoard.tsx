import Button from './ui/Button'
import { motion } from 'framer-motion'
import useToggleColor from '@/src/store/toggleColor'
import globalBoard from '@/src/store/globalBoard'

type TDeleteBoard = {
  refDelete: React.RefObject<HTMLDivElement>
  setDeleteBoard: (value: boolean | ((prev: boolean) => boolean)) => void
  id: number | null
}

const deleteBoard = ({ refDelete, setDeleteBoard, id }: TDeleteBoard) => {
  const isOn = useToggleColor((state) => state.isOn)
  const deleteBoard = globalBoard((state) => state.deleteBoard)

  const handleDelete = (id: number | null) => {
    deleteBoard(id)
    setDeleteBoard((prev) => !prev)
  }

  const handleClose = () => {
    setDeleteBoard((prev) => !prev)
  }
  return (
    <div className="fixed inset-0 flex h-full items-center justify-center bg-black bg-opacity-50">
      <motion.div
        className={`${isOn ? 'bg-Neutral-Primary' : 'bg-foreground'} flex w-[350px] flex-col rounded-lg px-6 py-6 sm:w-[450px] lg:w-[500px] whitespace-normal`}
        initial={{ opacity: 0, rotate: 0 }}
        animate={{ opacity: 1, rotate: -360 }}
        transition={{
          duration: 0.1
        }}
        ref={refDelete}
      >
        <div className="text-lg font-medium text-secondary md:font-semibold">
          Delete this Board?
        </div>

        <p className="py-6 text-xs leading-5 text-Neutral-Secondary">
          Are you sure you want to delete the "Example Board" board? This action
          will remove all columns and tasks and cannot be reversed.
        </p>

        <div className="flex flex-col gap-y-4 md:flex-row md:gap-x-4">
          <Button
            className="w-full rounded-3xl bg-secondary text-xs font-medium text-Neutral-Primary md:font-semibold"
            size="lg"
            onClick={() => handleDelete(id)}
          >
            Delete
          </Button>
          <Button
            className={`${isOn ? 'bg-Neutral-forth' : 'bg-Neutral-Primary'} w-full rounded-3xl text-xs font-medium text-Primary-button md:font-semibold`}
            size="lg"
            onClick={handleClose}
          >
            Cancel
          </Button>
        </div>
      </motion.div>
    </div>
  )
}

export default deleteBoard
