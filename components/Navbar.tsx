import { motion } from 'framer-motion'

type TNavbar = {
  handleOpen: () => void
  openAddNewTask: () => void
  openSideBarMini: () => void
  sideBarMini: boolean
}

const Navbar = ({
  handleOpen,
  openAddNewTask,
  openSideBarMini,
  sideBarMini
}: TNavbar) => {
  return (
    <>
      <nav className="bg-foreground px-3 py-4 sm:px-6 sm:py-0">
        <div>
          <motion.div
            className="flex justify-between"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 100, damping: 10 }}
          >
            <div className="flex items-center gap-3">
              <div className="flex items-center">
                <svg
                  width="153"
                  height="26"
                  xmlns="http://www.w3.org/2000/svg"
                  className="hidden sm:flex"
                >
                  <g fill="none" fillRule="evenodd">
                    <path
                      d="M44.56 25v-5.344l1.92-2.112L50.928 25h5.44l-6.304-10.432 6.336-7.04h-5.92l-5.92 6.304V.776h-4.8V25h4.8Zm19.36.384c2.176 0 3.925-.672 5.248-2.016V25h4.48V13.48c0-1.259-.315-2.363-.944-3.312-.63-.95-1.51-1.69-2.64-2.224-1.13-.533-2.432-.8-3.904-.8-1.856 0-3.483.427-4.88 1.28-1.397.853-2.352 2.005-2.864 3.456l3.84 1.824a4.043 4.043 0 0 1 1.424-1.856c.65-.47 1.403-.704 2.256-.704.896 0 1.605.224 2.128.672.523.448.784 1.003.784 1.664v.48l-4.832.768c-2.09.341-3.648.992-4.672 1.952-1.024.96-1.536 2.176-1.536 3.648 0 1.579.55 2.816 1.648 3.712 1.099.896 2.587 1.344 4.464 1.344Zm.96-3.52c-.597 0-1.099-.15-1.504-.448-.405-.299-.608-.715-.608-1.248 0-.576.181-1.019.544-1.328.363-.31.885-.528 1.568-.656l3.968-.704v.544c0 1.067-.363 1.973-1.088 2.72-.725.747-1.685 1.12-2.88 1.12ZM81.968 25V14.792c0-1.003.299-1.808.896-2.416.597-.608 1.365-.912 2.304-.912.939 0 1.707.304 2.304.912.597.608.896 1.413.896 2.416V25h4.8V13.768c0-1.323-.277-2.48-.832-3.472a5.918 5.918 0 0 0-2.32-2.32c-.992-.555-2.15-.832-3.472-.832-1.11 0-2.09.208-2.944.624a4.27 4.27 0 0 0-1.952 1.904V7.528h-4.48V25h4.8Zm24.16.384c1.707 0 3.232-.405 4.576-1.216a8.828 8.828 0 0 0 3.184-3.296c.779-1.387 1.168-2.923 1.168-4.608 0-1.707-.395-3.248-1.184-4.624a8.988 8.988 0 0 0-3.2-3.28c-1.344-.81-2.848-1.216-4.512-1.216-2.112 0-3.787.619-5.024 1.856V.776h-4.8V25h4.48v-1.664c.619.661 1.392 1.168 2.32 1.52a8.366 8.366 0 0 0 2.992.528Zm-.576-4.32c-1.301 0-2.363-.443-3.184-1.328-.821-.885-1.232-2.043-1.232-3.472 0-1.408.41-2.56 1.232-3.456.821-.896 1.883-1.344 3.184-1.344 1.323 0 2.41.453 3.264 1.36.853.907 1.28 2.053 1.28 3.44 0 1.408-.427 2.56-1.28 3.456-.853.896-1.941 1.344-3.264 1.344Zm17.728 4.32c2.176 0 3.925-.672 5.248-2.016V25h4.48V13.48c0-1.259-.315-2.363-.944-3.312-.63-.95-1.51-1.69-2.64-2.224-1.13-.533-2.432-.8-3.904-.8-1.856 0-3.483.427-4.88 1.28-1.397.853-2.352 2.005-2.864 3.456l3.84 1.824a4.043 4.043 0 0 1 1.424-1.856c.65-.47 1.403-.704 2.256-.704.896 0 1.605.224 2.128.672.523.448.784 1.003.784 1.664v.48l-4.832.768c-2.09.341-3.648.992-4.672 1.952-1.024.96-1.536 2.176-1.536 3.648 0 1.579.55 2.816 1.648 3.712 1.099.896 2.587 1.344 4.464 1.344Zm.96-3.52c-.597 0-1.099-.15-1.504-.448-.405-.299-.608-.715-.608-1.248 0-.576.181-1.019.544-1.328.363-.31.885-.528 1.568-.656l3.968-.704v.544c0 1.067-.363 1.973-1.088 2.72-.725.747-1.685 1.12-2.88 1.12ZM141.328 25V14.792c0-1.003.299-1.808.896-2.416.597-.608 1.365-.912 2.304-.912.939 0 1.707.304 2.304.912.597.608.896 1.413.896 2.416V25h4.8V13.768c0-1.323-.277-2.48-.832-3.472a5.918 5.918 0 0 0-2.32-2.32c-.992-.555-2.15-.832-3.472-.832-1.11 0-2.09.208-2.944.624a4.27 4.27 0 0 0-1.952 1.904V7.528h-4.48V25h4.8Z"
                      fill="#FFF"
                      fillRule="nonzero"
                    ></path>
                    <g transform="translate(0 1)" fill="#635FC7">
                      <rect width="6" height="25" rx="2"></rect>
                      <rect
                        opacity="0.75"
                        x="9"
                        width="6"
                        height="25"
                        rx="2"
                      ></rect>
                      <rect
                        opacity="0.5"
                        x="18"
                        width="6"
                        height="25"
                        rx="2"
                      ></rect>
                    </g>
                  </g>
                </svg>
                <div className=" border-r-[1px] sm:ml-24 md:ml-28 h-20 md:h-24 border-gray-600  hidden sm:flex" />
              </div>

              <svg
                width="24"
                height="25"
                xmlns="http://www.w3.org/2000/svg"
                className="flex sm:hidden"
              >
                <g fill="#635FC7" fillRule="evenodd">
                  <rect width="6" height="25" rx="2"></rect>
                  <rect
                    opacity="0.75"
                    x="9"
                    width="6"
                    height="25"
                    rx="2"
                  ></rect>
                  <rect
                    opacity="0.5"
                    x="18"
                    width="6"
                    height="25"
                    rx="2"
                  ></rect>
                </g>
              </svg>

              <div className="text-lg sm:text-xl md:text-2xl sm:ml-5 text-Neutral-Primary font-semibold">
                Example Board
              </div>

              {sideBarMini ? (
                <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg">
                  <path
                    stroke="#635FC7"
                    stroke-width="2"
                    fill="none"
                    d="M9 6 5 2 1 6"
                  ></path>
                </svg>
              ) : (
                <svg
                  width="10"
                  height="7"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex sm:hidden"
                  onClick={openSideBarMini}
                >
                  <path
                    stroke="#635FC7"
                    strokeWidth="2"
                    fill="none"
                    d="m1 1 4 4 4-4"
                  ></path>
                </svg>
              )}
            </div>

            <div className="flex items-center gap-3 sm:gap-7">
              <div
                className="bg-Primary-button px-4 py-2 md:px-5 md:py-3 md:rounded-3xl rounded-2xl hover:bg-Primary-buttonLight cursor-pointer"
                onClick={openAddNewTask}
              >
                <svg
                  width="12"
                  height="12"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex md:hidden"
                >
                  <path
                    fill="#FFF"
                    d="M7.368 12V7.344H12V4.632H7.368V0H4.656v4.632H0v2.712h4.656V12z"
                  ></path>
                </svg>
                <span className="hidden md:flex text-Neutral-Primary">
                  + Add new task
                </span>
              </div>
              <svg
                width="5"
                height="20"
                xmlns="http://www.w3.org/2000/svg"
                onClick={handleOpen}
                className="cursor-pointer"
              >
                <g fill="#828FA3" fillRule="evenodd">
                  <circle cx="2.308" cy="2.308" r="2.308"></circle>
                  <circle cx="2.308" cy="10" r="2.308"></circle>
                  <circle cx="2.308" cy="17.692" r="2.308"></circle>
                </g>
              </svg>
            </div>
          </motion.div>
        </div>
      </nav>
      <div className="border-b-[1px] border-gray-600 xl:hidden hidden sm:flex"></div>
    </>
  )
}

export default Navbar
