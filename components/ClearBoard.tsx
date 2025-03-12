import React from 'react'
import Button from './ui/Button'
import { motion } from 'framer-motion'
import useToggleColor from '@/src/store/toggleColor'

type TClearBoard = {
  refClear: React.RefObject<HTMLDivElement>
  setClearBoard: (value: boolean | ((prev: boolean) => boolean)) => void
}

const ClearBoard = ({ refClear, setClearBoard }: TClearBoard) => {
  const isOn = useToggleColor((state) => state.isOn)

  const handleClose = () => {
    setClearBoard((prev) => !prev)
  }
  return (
    <div className="fixed inset-0 flex h-full items-center justify-center bg-black bg-opacity-50">
      <motion.div
        className={`${isOn ? 'bg-Neutral-Primary' : 'bg-foreground'} flex w-[350px] flex-col rounded-lg px-6 py-6 sm:w-[450px] lg:w-[500px]`}
        initial={{ opacity: 0, rotate: 0 }}
        animate={{ opacity: 1, rotate: -360 }}
        transition={{
          duration: 0.1
        }}
        ref={refClear}
      >
        <div className="text-lg font-medium text-secondary md:font-semibold">
          Clear this Board?
        </div>

        <p className="py-6 text-xs leading-5 text-Neutral-Secondary">
          Are you sure you want to clear the "Example Board" board? This action
          will remove all columns and tasks and cannot be reversed.
        </p>

        <div className="flex flex-col gap-y-4 md:flex-row md:gap-x-4">
          <Button
            className="w-full rounded-3xl bg-secondary text-xs font-medium text-Neutral-Primary md:font-semibold"
            size="lg"
          >
            Clear
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

export default ClearBoard
