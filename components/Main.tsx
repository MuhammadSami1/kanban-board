'use client'
import { motion } from 'framer-motion'
import Button from './ui/Button'
import Editboard from './shared/Editboard'
import { useEffect, useRef, useState } from 'react'

const Main = () => {
  const [edit, setEdit] = useState(false)
  const refEdit = useRef<HTMLDivElement>(null)

  const openEdit = () => {
    setEdit((prev) => !prev)
  }

  const handleClickEdit = (event: MouseEvent) => {
    if (refEdit.current && !refEdit.current.contains(event.target as Node)) {
      setEdit(false)
    }
  }

  useEffect(() => {
    if (edit) {
      document.addEventListener('mousedown', handleClickEdit)
    } else {
      document.removeEventListener('mousedown', handleClickEdit)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickEdit)
    }
  }, [edit])

  return (
    <>
      <motion.div
        className="p-6 flex gap-x-6  min-w-max"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="flex gap-x-6">
          {/* tasks */}
          <div className="w-72 space-y-6">
            <div className="flex items-center gap-x-2">
              <div className="rounded-full bg-yellow-400 h-4 w-4"></div>
              <h2 className="text-Neutral-Secondary">Todo (2)</h2>
            </div>

            <div>
              <div className="bg-foreground shadow-lg shadow-Primary-buttonDark rounded-lg p-4 font-semibold space-y-2">
                <h3 className="text-Neutral-Primary text-sm break-words whitespace-normal hover:text-Primary-button transition-all duration-300">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloremque nulla modi explicabo ipsa. Rerum velit, repudiandae
                  facilis dolorem temporibus quod beatae asperiores ea vero
                  eligendi optio! Libero quod id quos!
                </h3>
                <h4 className="text-Neutral-Secondary text-xs">
                  2 of 3 subtasks
                </h4>
              </div>
            </div>

            <div>
              <div className="bg-foreground shadow-lg shadow-Primary-buttonDark rounded-lg p-4 font-semibold space-y-2">
                <h3 className="text-Neutral-Primary text-sm break-words whitespace-normal hover:text-Primary-button transition-all duration-300">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloremque nulla modi explicabo ipsa. Rerum velit, repudiandae
                  facilis dolorem temporibus quod beatae asperiores ea vero
                  eligendi optio! Libero quod id quos!
                </h3>
                <h4 className="text-Neutral-Secondary text-xs">
                  2 of 3 subtasks
                </h4>
              </div>
            </div>

            <div>
              <div className="bg-foreground shadow-lg shadow-Primary-buttonDark rounded-lg p-4 font-semibold space-y-2">
                <h3 className="text-Neutral-Primary text-sm break-words whitespace-normal hover:text-Primary-button transition-all duration-300">
                  Lorem ipsum dolor
                </h3>
                <h4 className="text-Neutral-Secondary text-xs">
                  2 of 3 subtasks
                </h4>
              </div>
            </div>
          </div>

          <div className="w-72 space-y-6">
            <div className="flex items-center gap-x-2">
              <div className="rounded-full bg-yellow-400 h-4 w-4"></div>
              <h2 className="text-Neutral-Secondary">Todo (2)</h2>
            </div>

            <div>
              <div className="bg-foreground shadow-lg shadow-Primary-buttonDark rounded-lg p-4 font-semibold space-y-2">
                <h3 className="text-Neutral-Primary text-sm break-words whitespace-normal">
                  Lorem ipsum dolor
                </h3>
                <h4 className="text-Neutral-Secondary text-xs">
                  2 of 3 subtasks
                </h4>
              </div>
            </div>

            <div>
              <div className="bg-foreground shadow-lg shadow-Primary-buttonDark rounded-lg p-4 font-semibold space-y-2">
                <h3 className="text-Neutral-Primary text-sm">
                  Do your Homework
                </h3>
                <h4 className="text-Neutral-Secondary text-xs">
                  2 of 3 subtasks
                </h4>
              </div>
            </div>

            <div>
              <div className="bg-foreground shadow-lg shadow-Primary-buttonDark rounded-lg p-4 font-semibold space-y-2">
                <h3 className="text-Neutral-Primary text-sm">
                  Do your Homework
                </h3>
                <h4 className="text-Neutral-Secondary text-xs">
                  2 of 3 subtasks
                </h4>
              </div>
            </div>

            <div>
              <div className="bg-foreground shadow-lg shadow-Primary-buttonDark rounded-lg p-4 font-semibold space-y-2">
                <h3 className="text-Neutral-Primary text-sm">
                  Do your Homework
                </h3>
                <h4 className="text-Neutral-Secondary text-xs">
                  2 of 3 subtasks
                </h4>
              </div>
            </div>
          </div>

          <div className="w-72 space-y-6">
            <div className="flex items-center gap-x-2">
              <div className="rounded-full bg-yellow-400 h-4 w-4"></div>
              <h2 className="text-Neutral-Secondary">Todo (2)</h2>
            </div>

            <div>
              <div className="bg-foreground shadow-lg shadow-Primary-buttonDark rounded-lg p-4 font-semibold space-y-2">
                <h3 className="text-Neutral-Primary text-sm break-words whitespace-normal">
                  Lorem ipsum dolor
                </h3>
                <h4 className="text-Neutral-Secondary text-xs">
                  2 of 3 subtasks
                </h4>
              </div>
            </div>

            <div>
              <div className="bg-foreground shadow-lg shadow-Primary-buttonDark rounded-lg p-4 font-semibold space-y-2">
                <h3 className="text-Neutral-Primary text-sm">
                  Do your Homework
                </h3>
                <h4 className="text-Neutral-Secondary text-xs">
                  2 of 3 subtasks
                </h4>
              </div>
            </div>

            <div>
              <div className="bg-foreground shadow-lg shadow-Primary-buttonDark rounded-lg p-4 font-semibold space-y-2">
                <h3 className="text-Neutral-Primary text-sm">
                  Do your Homework
                </h3>
                <h4 className="text-Neutral-Secondary text-xs">
                  2 of 3 subtasks
                </h4>
              </div>
            </div>

            <div>
              <div className="bg-foreground shadow-lg shadow-Primary-buttonDark rounded-lg p-4 font-semibold space-y-2">
                <h3 className="text-Neutral-Primary text-sm">
                  Do your Homework
                </h3>
                <h4 className="text-Neutral-Secondary text-xs">
                  2 of 3 subtasks
                </h4>
              </div>
            </div>
          </div>

          <div className="w-72 space-y-6">
            <div className="flex items-center gap-x-2">
              <div className="rounded-full bg-yellow-400 h-4 w-4"></div>
              <h2 className="text-Neutral-Secondary">Todo (2)</h2>
            </div>

            <div>
              <div className="bg-foreground shadow-lg shadow-Primary-buttonDark rounded-lg p-4 font-semibold space-y-2">
                <h3 className="text-Neutral-Primary text-sm break-words whitespace-normal hover:text-Primary-button transition-all duration-300">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloremque nulla modi explicabo ipsa. Rerum velit, repudiandae
                  facilis dolorem temporibus quod beatae asperiores ea vero
                  eligendi optio! Libero quod id quos!
                </h3>
                <h4 className="text-Neutral-Secondary text-xs">
                  2 of 3 subtasks
                </h4>
              </div>
            </div>

            <div>
              <div className="bg-foreground shadow-lg shadow-Primary-buttonDark rounded-lg p-4 font-semibold space-y-2">
                <h3 className="text-Neutral-Primary text-sm break-words whitespace-normal hover:text-Primary-button transition-all duration-300">
                  Lorem ipsum dolor
                </h3>
                <h4 className="text-Neutral-Secondary text-xs">
                  2 of 3 subtasks
                </h4>
              </div>
            </div>
          </div>

          <div className="w-72 space-y-6">
            <div className="flex items-center gap-x-2">
              <div className="rounded-full bg-yellow-400 h-4 w-4"></div>
              <h2 className="text-Neutral-Secondary">Todo (2)</h2>
            </div>

            <div>
              <div className="bg-foreground shadow-lg shadow-Primary-buttonDark rounded-lg p-4 font-semibold space-y-2">
                <h3 className="text-Neutral-Primary text-sm break-words whitespace-normal hover:text-Primary-button transition-all duration-300">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloremque nulla modi explicabo ipsa. Rerum velit, repudiandae
                  facilis dolorem temporibus quod beatae asperiores ea vero
                  eligendi optio! Libero quod id quos!
                </h3>
                <h4 className="text-Neutral-Secondary text-xs">
                  2 of 3 subtasks
                </h4>
              </div>
            </div>

            <div>
              <div className="bg-foreground shadow-lg shadow-Primary-buttonDark rounded-lg p-4 font-semibold space-y-2">
                <h3 className="text-Neutral-Primary text-sm break-words whitespace-normal hover:text-Primary-button transition-all duration-300">
                  Lorem ipsum dolor
                </h3>
                <h4 className="text-Neutral-Secondary text-xs">
                  2 of 3 subtasks
                </h4>
              </div>
            </div>
          </div>
        </div>

        <div
          className="min-w-64 bg-foreground rounded-lg flex items-center justify-center  backgroundOpacity hover:scale-105 transition-all duration-500 ease-in-out self-start"
          onClick={openEdit}
        >
          <Button className="text-Neutral-Secondary text-xl font-semibold">
            <span>+New Column</span>
          </Button>
        </div>
      </motion.div>
      {edit && <Editboard refEdit={refEdit} />}
    </>
  )
}

export default Main
