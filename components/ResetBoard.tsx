import React from 'react'
import Button from './ui/Button'
import { motion } from 'framer-motion'

type TResetBoard = {
  refReset: React.RefObject<HTMLDivElement>
}

const ResetBoard = ({ refReset }: TResetBoard) => {
  return (
    <div className="fixed h-full inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <motion.div
        className="flex flex-col px-6 bg-foreground w-[350px] sm:w-[450px] lg:w-[500px] rounded-lg py-6"
        initial={{ opacity: 0, rotate: 0 }}
        animate={{ opacity: 1, rotate: -360 }}
        transition={{
          duration: 0.1
        }}
        ref={refReset}
      >
        <div className="text-lg text-secondary font-medium md:font-semibold">
          Reset all Boards?
        </div>

        <p className="text-Neutral-Secondary text-xs leading-5 py-6">
          Are you sure you want to reset all boards? This action will remove all
          boards, columns, tasks etc which where created by you. This action
          can't be reversed!
        </p>

        <div className="flex flex-col md:flex-row md:gap-x-4 gap-y-4">
          <Button
            className="bg-secondary text-Neutral-Primary text-xs rounded-3xl w-full font-medium md:font-semibold"
            size="lg"
          >
            Reset
          </Button>
          <Button
            className="text-Primary-button bg-Neutral-Primary rounded-3xl w-full text-xs font-medium md:font-semibold"
            size="lg"
          >
            Cancel
          </Button>
        </div>
      </motion.div>
    </div>
  )
}

export default ResetBoard
