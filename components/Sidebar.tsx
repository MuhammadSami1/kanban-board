'use client'

import globalBoard from '@/src/store/globalBoard'
import useToggleColor from '@/src/store/toggleColor'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive'

type TSidebar = {
  handleOpenNewBoard: () => void
}

const Sidebar = ({ handleOpenNewBoard }: TSidebar) => {
  const [sideBarOpen, setSideBarOpen] = useState(true)
  const [isMediumScreen, setIsMediumScreen] = useState(false)

  const isOn = useToggleColor((state) => state.isOn)
  const toggle = useToggleColor((state) => state.toggle)
  const board = globalBoard((state) => state.board)
  const selectedBoard = globalBoard((state) => state.selectedBoard)
  const setSelectedBoard = globalBoard((state) => state.setSelectedBoard)

  // Detect screen size changes
  const isMedium = useMediaQuery({ query: '(min-width: 643px)' })

  useEffect(() => {
    // Trigger animation only when transitioning from small to medium
    if (isMedium) {
      setIsMediumScreen(true)
    } else {
      setIsMediumScreen(false)
    }
  }, [isMedium])

  const handleSideBarOpen = () => {
    setSideBarOpen((prev) => !prev)
  }

  const closeSideBar = () => {
    setSideBarOpen(!sideBarOpen)
  }

  const handleOnClick = (id: number) => {
    setSelectedBoard(id)
  }

  return (
    <>
      {sideBarOpen ? (
        <motion.div
          initial={{ x: -150, opacity: 0 }}
          animate={
            isMediumScreen ? { x: 0, opacity: 1 } : { x: -150, opacity: 0 }
          }
          transition={{ duration: 0.5 }}
          className={`${isOn ? 'border-gray-300' : 'border-gray-600'} hidden w-[274px] border-r-[1px] bg-foreground sm:flex md:w-[290px]`}
        >
          <div
            className={`${isOn ? 'bg-Neutral-Primary' : 'bg-foreground'} flex flex-1 flex-col items-start pb-7 text-Neutral-Secondary`}
          >
            <h2 className="pb-3 pl-8 pt-4 text-sm font-semibold tracking-widest">
              ALL BOARDS ({board.length})
            </h2>

            <div className="flex flex-col text-sm tracking-wider">
              {board.map((items) => (
                <div
                  className={`${isOn ? 'hover:bg-Neutral-forth' : 'hover:bg-Neutral-Primary'} group cursor-pointer py-4 pl-8 font-semibold transition-all duration-500 ease-in-out hover:rounded-r-full hover:text-Primary-button md:pr-9 ${selectedBoard === items.id && 'bg-Primary-button text-Neutral-Primary rounded-r-full'}`}
                  key={items.id}
                  onClick={() => handleOnClick(items.id)}
                >
                  <div className="flex items-center gap-x-4">
                    <svg
                      width="16"
                      height="16"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#828FA3"
                      className={`group-hover:fill-Primary-button ${selectedBoard === items.id && 'fill-Neutral-Primary'}`}
                    >
                      <path d="M0 2.889A2.889 2.889 0 0 1 2.889 0H13.11A2.889 2.889 0 0 1 16 2.889V13.11A2.888 2.888 0 0 1 13.111 16H2.89A2.889 2.889 0 0 1 0 13.111V2.89Zm1.333 5.555v4.667c0 .859.697 1.556 1.556 1.556h6.889V8.444H1.333Zm8.445-1.333V1.333h-6.89A1.556 1.556 0 0 0 1.334 2.89V7.11h8.445Zm4.889-1.333H11.11v4.444h3.556V5.778Zm0 5.778H11.11v3.11h2a1.556 1.556 0 0 0 1.556-1.555v-1.555Zm0-7.112V2.89a1.555 1.555 0 0 0-1.556-1.556h-2v3.111h3.556Z"></path>
                    </svg>
                    <h2>{items.boardName}</h2>
                  </div>
                </div>
              ))}
              <div
                className="cursor-pointer py-4 pl-8 pr-9 font-semibold text-Primary-button transition-all duration-300"
                onClick={handleOpenNewBoard}
              >
                <div className="flex items-center gap-x-4">
                  <svg
                    width="16"
                    height="16"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#828FA3"
                    className="fill-Primary-button"
                  >
                    <path d="M0 2.889A2.889 2.889 0 0 1 2.889 0H13.11A2.889 2.889 0 0 1 16 2.889V13.11A2.888 2.888 0 0 1 13.111 16H2.89A2.889 2.889 0 0 1 0 13.111V2.89Zm1.333 5.555v4.667c0 .859.697 1.556 1.556 1.556h6.889V8.444H1.333Zm8.445-1.333V1.333h-6.89A1.556 1.556 0 0 0 1.334 2.89V7.11h8.445Zm4.889-1.333H11.11v4.444h3.556V5.778Zm0 5.778H11.11v3.11h2a1.556 1.556 0 0 0 1.556-1.555v-1.555Zm0-7.112V2.89a1.555 1.555 0 0 0-1.556-1.556h-2v3.111h3.556Z"></path>
                  </svg>
                  <h2>+Create New Board</h2>
                </div>
              </div>
            </div>

            {/* bottom */}
            <div className="mt-auto">
              <div className="pl-8">
                <div
                  className={`${isOn ? 'bg-Neutral-fifth' : 'bg-background'} flex items-center justify-between gap-x-6 rounded-md px-12 py-4 lg:px-14`}
                >
                  <svg
                    width="19"
                    height="19"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.167 15.833a.833.833 0 0 1 .833.834v.833a.833.833 0 0 1-1.667 0v-.833a.833.833 0 0 1 .834-.834ZM3.75 13.75a.833.833 0 0 1 .59 1.422l-1.25 1.25a.833.833 0 0 1-1.18-1.178l1.25-1.25a.833.833 0 0 1 .59-.244Zm10.833 0c.221 0 .433.088.59.244l1.25 1.25a.833.833 0 0 1-1.179 1.178l-1.25-1.25a.833.833 0 0 1 .59-1.422ZM9.167 5a4.167 4.167 0 1 1 0 8.334 4.167 4.167 0 0 1 0-8.334Zm-7.5 3.333a.833.833 0 0 1 0 1.667H.833a.833.833 0 1 1 0-1.667h.834Zm15.833 0a.833.833 0 0 1 0 1.667h-.833a.833.833 0 0 1 0-1.667h.833Zm-1.667-6.666a.833.833 0 0 1 .59 1.422l-1.25 1.25a.833.833 0 1 1-1.179-1.178l1.25-1.25a.833.833 0 0 1 .59-.244Zm-13.333 0c.221 0 .433.088.59.244l1.25 1.25a.833.833 0 0 1-1.18 1.178L1.91 3.09a.833.833 0 0 1 .59-1.422ZM9.167 0A.833.833 0 0 1 10 .833v.834a.833.833 0 1 1-1.667 0V.833A.833.833 0 0 1 9.167 0Z"
                      fill="#828FA3"
                    ></path>
                  </svg>

                  <label className="relative inline-flex cursor-pointer items-center">
                    <input
                      type="checkbox"
                      className="peer sr-only"
                      onChange={toggle}
                      checked={isOn}
                      id="lightModeToggle"
                    />
                    <div className="peer h-6 w-12 rounded-full bg-Primary-button after:absolute after:left-1 after:top-1 after:h-4 after:w-4 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:duration-500 after:content-[''] peer-checked:bg-indigo-500 peer-checked:after:translate-x-6 peer-checked:after:border-white"></div>
                  </label>

                  <svg
                    width="16"
                    height="16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.474.682c.434-.11.718.406.481.78A6.067 6.067 0 0 0 6.01 4.72c0 3.418 2.827 6.187 6.314 6.187.89.002 1.77-.182 2.584-.54.408-.18.894.165.724.57-1.16 2.775-3.944 4.73-7.194 4.73-4.292 0-7.771-3.41-7.771-7.615 0-3.541 2.466-6.518 5.807-7.37Zm8.433.07c.442-.294.969.232.674.674l-.525.787a1.943 1.943 0 0 0 0 2.157l.525.788c.295.441-.232.968-.674.673l-.787-.525a1.943 1.943 0 0 0-2.157 0l-.786.525c-.442.295-.97-.232-.675-.673l.525-.788a1.943 1.943 0 0 0 0-2.157l-.525-.787c-.295-.442.232-.968.674-.673l.787.525a1.943 1.943 0 0 0 2.157 0Z"
                      fill="#828FA3"
                    ></path>
                  </svg>
                </div>
              </div>

              <div
                className="group cursor-pointer rounded-r-full py-4 pl-8 pr-14 transition-all duration-500 ease-in-out hover:bg-Neutral-Primary hover:text-Primary-button"
                onClick={closeSideBar}
              >
                <div className="flex items-center gap-x-5 font-semibold">
                  <svg
                    width="18"
                    height="16"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#828FA3"
                    className="group-hover:fill-Primary-button"
                  >
                    <path d="M8.522 11.223a4.252 4.252 0 0 1-3.654-5.22l3.654 5.22ZM9 12.25A8.685 8.685 0 0 1 1.5 8a8.612 8.612 0 0 1 2.76-2.864l-.86-1.23A10.112 10.112 0 0 0 .208 7.238a1.5 1.5 0 0 0 0 1.524A10.187 10.187 0 0 0 9 13.75c.414 0 .828-.025 1.239-.074l-1-1.43A8.88 8.88 0 0 1 9 12.25Zm8.792-3.488a10.14 10.14 0 0 1-4.486 4.046l1.504 2.148a.375.375 0 0 1-.092.523l-.648.453a.375.375 0 0 1-.523-.092L3.19 1.044A.375.375 0 0 1 3.282.52L3.93.068a.375.375 0 0 1 .523.092l1.735 2.479A10.308 10.308 0 0 1 9 2.25c3.746 0 7.031 2 8.792 4.988a1.5 1.5 0 0 1 0 1.524ZM16.5 8a8.674 8.674 0 0 0-6.755-4.219A1.75 1.75 0 1 0 12.75 5v-.001a4.25 4.25 0 0 1-1.154 5.366l.834 1.192A8.641 8.641 0 0 0 16.5 8Z"></path>
                  </svg>
                  <h2>Hide Sidebar</h2>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      ) : (
        <div
          className="absolute bottom-0 mb-7 hidden cursor-pointer sm:flex"
          onClick={handleSideBarOpen}
        >
          <div className="rounded-r-full bg-Primary-button px-5 py-5">
            <svg
              width="16"
              height="11"
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
            >
              <path d="M15.815 4.434A9.055 9.055 0 0 0 8 0 9.055 9.055 0 0 0 .185 4.434a1.333 1.333 0 0 0 0 1.354A9.055 9.055 0 0 0 8 10.222c3.33 0 6.25-1.777 7.815-4.434a1.333 1.333 0 0 0 0-1.354ZM8 8.89A3.776 3.776 0 0 1 4.222 5.11 3.776 3.776 0 0 1 8 1.333a3.776 3.776 0 0 1 3.778 3.778A3.776 3.776 0 0 1 8 8.89Zm2.889-3.778a2.889 2.889 0 1 1-5.438-1.36 1.19 1.19 0 1 0 1.19-1.189H6.64a2.889 2.889 0 0 1 4.25 2.549Z"></path>
            </svg>
          </div>
        </div>
      )}
    </>
  )
}

export default Sidebar
