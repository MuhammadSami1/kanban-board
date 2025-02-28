import useToggleColor from '@/src/store/toggleColor'
import { useMediaQuery } from 'react-responsive'

type TSidebarMini = {
  refSideBarMini: React.RefObject<HTMLDivElement>
}

const SidebarMini = ({ refSideBarMini }: TSidebarMini) => {
  const isMedium = useMediaQuery({ query: '(min-width: 540px)' })
  const isOn = useToggleColor((state) => state.isOn)
  const toggle = useToggleColor((state) => state.toggle)

  return (
    <div className="fixed inset-0 h-full bg-black bg-opacity-50 sm:hidden">
      <div
        className={`${isMedium ? 'w-80' : 'w-64'} ${isOn ? 'bg-Neutral-Primary' : 'bg-foreground'} absolute flex flex-col items-start rounded-md py-3 text-[13px] text-Neutral-Secondary shadow-2xl shadow-Primary-buttonDark sm:hidden`}
        style={{
          left: '49%',
          top: '8%',
          transform: 'translateX(-50%)'
        }}
        ref={refSideBarMini}
      >
        <h2 className="px-4 pb-3 text-sm font-semibold tracking-widest">
          ALL BOARDS (3)
        </h2>

        <div className="flex flex-col text-sm tracking-wider">
          <div
            className={`${isOn ? 'hover:bg-Neutral-forth' : 'hover:bg-Neutral-Primary'} group cursor-pointer py-4 font-semibold transition-all duration-700 ease-in-out hover:rounded-r-full hover:text-Primary-button`}
          >
            <div className="ml-6 flex items-center gap-x-2">
              <svg
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                fill="#828FA3"
                className="group-hover:fill-Primary-button"
              >
                <path d="M0 2.889A2.889 2.889 0 0 1 2.889 0H13.11A2.889 2.889 0 0 1 16 2.889V13.11A2.888 2.888 0 0 1 13.111 16H2.89A2.889 2.889 0 0 1 0 13.111V2.89Zm1.333 5.555v4.667c0 .859.697 1.556 1.556 1.556h6.889V8.444H1.333Zm8.445-1.333V1.333h-6.89A1.556 1.556 0 0 0 1.334 2.89V7.11h8.445Zm4.889-1.333H11.11v4.444h3.556V5.778Zm0 5.778H11.11v3.11h2a1.556 1.556 0 0 0 1.556-1.555v-1.555Zm0-7.112V2.89a1.555 1.555 0 0 0-1.556-1.556h-2v3.111h3.556Z"></path>
              </svg>
              <h2>Example Board</h2>
            </div>
          </div>

          <div
            className={`${isOn ? 'hover:bg-Neutral-forth' : 'hover:bg-Neutral-Primary'} group cursor-pointer py-4 font-semibold transition-all duration-700 ease-in-out hover:rounded-r-full hover:text-Primary-button`}
          >
            <div className="ml-6 flex items-center gap-x-2">
              <svg
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                fill="#828FA3"
                className="group-hover:fill-Primary-button"
              >
                <path d="M0 2.889A2.889 2.889 0 0 1 2.889 0H13.11A2.889 2.889 0 0 1 16 2.889V13.11A2.888 2.888 0 0 1 13.111 16H2.89A2.889 2.889 0 0 1 0 13.111V2.89Zm1.333 5.555v4.667c0 .859.697 1.556 1.556 1.556h6.889V8.444H1.333Zm8.445-1.333V1.333h-6.89A1.556 1.556 0 0 0 1.334 2.89V7.11h8.445Zm4.889-1.333H11.11v4.444h3.556V5.778Zm0 5.778H11.11v3.11h2a1.556 1.556 0 0 0 1.556-1.555v-1.555Zm0-7.112V2.89a1.555 1.555 0 0 0-1.556-1.556h-2v3.111h3.556Z"></path>
              </svg>
              <h2>Example Board</h2>
            </div>
          </div>

          <div
            className={`${isOn ? 'hover:bg-Neutral-forth' : 'hover:bg-Neutral-Primary'} group cursor-pointer py-4 font-semibold transition-all duration-700 ease-in-out hover:rounded-r-full hover:text-Primary-button`}
          >
            <div className="ml-6 flex items-center gap-x-2">
              <svg
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                fill="#828FA3"
                className="group-hover:fill-Primary-button"
              >
                <path d="M0 2.889A2.889 2.889 0 0 1 2.889 0H13.11A2.889 2.889 0 0 1 16 2.889V13.11A2.888 2.888 0 0 1 13.111 16H2.89A2.889 2.889 0 0 1 0 13.111V2.89Zm1.333 5.555v4.667c0 .859.697 1.556 1.556 1.556h6.889V8.444H1.333Zm8.445-1.333V1.333h-6.89A1.556 1.556 0 0 0 1.334 2.89V7.11h8.445Zm4.889-1.333H11.11v4.444h3.556V5.778Zm0 5.778H11.11v3.11h2a1.556 1.556 0 0 0 1.556-1.555v-1.555Zm0-7.112V2.89a1.555 1.555 0 0 0-1.556-1.556h-2v3.111h3.556Z"></path>
              </svg>
              <h2>Example Board</h2>
            </div>
          </div>

          <div className="cursor-pointer py-4 font-semibold text-Primary-button transition-all duration-300">
            <div className="ml-6 flex items-center gap-x-2">
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

        <div className="mx-auto pt-3">
          <div
            className={`${isMedium ? 'px-[74px] py-4' : 'px-10 py-4'} ${isOn ? 'bg-Neutral-fifth' : 'bg-background'} flex items-center justify-between gap-x-6 rounded-md`}
          >
            <svg width="19" height="19" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M9.167 15.833a.833.833 0 0 1 .833.834v.833a.833.833 0 0 1-1.667 0v-.833a.833.833 0 0 1 .834-.834ZM3.75 13.75a.833.833 0 0 1 .59 1.422l-1.25 1.25a.833.833 0 0 1-1.18-1.178l1.25-1.25a.833.833 0 0 1 .59-.244Zm10.833 0c.221 0 .433.088.59.244l1.25 1.25a.833.833 0 0 1-1.179 1.178l-1.25-1.25a.833.833 0 0 1 .59-1.422ZM9.167 5a4.167 4.167 0 1 1 0 8.334 4.167 4.167 0 0 1 0-8.334Zm-7.5 3.333a.833.833 0 0 1 0 1.667H.833a.833.833 0 1 1 0-1.667h.834Zm15.833 0a.833.833 0 0 1 0 1.667h-.833a.833.833 0 0 1 0-1.667h.833Zm-1.667-6.666a.833.833 0 0 1 .59 1.422l-1.25 1.25a.833.833 0 1 1-1.179-1.178l1.25-1.25a.833.833 0 0 1 .59-.244Zm-13.333 0c.221 0 .433.088.59.244l1.25 1.25a.833.833 0 0 1-1.18 1.178L1.91 3.09a.833.833 0 0 1 .59-1.422ZM9.167 0A.833.833 0 0 1 10 .833v.834a.833.833 0 1 1-1.667 0V.833A.833.833 0 0 1 9.167 0Z"
                fill="#828FA3"
              ></path>
            </svg>

            <label
              className="relative inline-flex cursor-pointer items-center"
              onClick={toggle}
            >
              <input
                type="checkbox"
                className="peer sr-only"
                onChange={toggle}
                checked={isOn}
                id="lightModeToggle"
              />
              <div className="peer h-6 w-12 rounded-full bg-Primary-button after:absolute after:left-1 after:top-1 after:h-4 after:w-4 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:duration-700 after:content-[''] peer-checked:bg-indigo-500 peer-checked:after:translate-x-6 peer-checked:after:border-white"></div>
            </label>

            <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M6.474.682c.434-.11.718.406.481.78A6.067 6.067 0 0 0 6.01 4.72c0 3.418 2.827 6.187 6.314 6.187.89.002 1.77-.182 2.584-.54.408-.18.894.165.724.57-1.16 2.775-3.944 4.73-7.194 4.73-4.292 0-7.771-3.41-7.771-7.615 0-3.541 2.466-6.518 5.807-7.37Zm8.433.07c.442-.294.969.232.674.674l-.525.787a1.943 1.943 0 0 0 0 2.157l.525.788c.295.441-.232.968-.674.673l-.787-.525a1.943 1.943 0 0 0-2.157 0l-.786.525c-.442.295-.97-.232-.675-.673l.525-.788a1.943 1.943 0 0 0 0-2.157l-.525-.787c-.295-.442.232-.968.674-.673l.787.525a1.943 1.943 0 0 0 2.157 0Z"
                fill="#828FA3"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SidebarMini
