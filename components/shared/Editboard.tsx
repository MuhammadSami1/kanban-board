import React from 'react'
import Button from '../ui/Button'

const Editboard = () => {
  return (
    <div className="fixed h-full inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="flex flex-col px-6 bg-foreground w-[350px] sm:w-[450px] lg:w-[500px] rounded-lg py-6">
        <div className="text-lg text-Neutral-Primary font-semibold">
          Edit Borad
        </div>

        {/* Forms */}
        <form className="text-Neutral-Primary pt-1">
          <label htmlFor="boradName" className="text-xs">
            Borad Name
          </label>
          <input
            type="text"
            name="boradName"
            className="w-full p-2 rounded-md bg-foreground border-[1px] border-Neutral-Secondary focus:outline-none"
          />
          <div className="pt-4 pb-3">
            <label htmlFor="BoradColumn" className="text-xs">
              Borad Column
            </label>

            <div className="space-y-4">
              <div className="flex justify-between">
                <input
                  type="text"
                  name="boradName"
                  className="w-64 sm:w-[350px] lg:w-96 p-2 rounded-md bg-foreground border-[1px] border-Neutral-Secondary focus:outline-none"
                />
                <Button>
                  <svg
                    width="15"
                    height="15"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#828FA3"
                  >
                    <g fill-rule="evenodd">
                      <path d="m12.728 0 2.122 2.122L2.122 14.85 0 12.728z"></path>
                      <path d="M0 2.122 2.122 0 14.85 12.728l-2.122 2.122z"></path>
                    </g>
                  </svg>
                </Button>
              </div>
            </div>
          </div>
        </form>

        <div className="flex flex-col gap-y-4 ">
          <Button
            className="bg-Neutral-Primary text-Primary-button rounded-3xl w-full font-semibold"
            size="lg"
          >
            + Add New Column
          </Button>
          <Button
            variant="button"
            className="rounded-3xl w-full font-semibold"
            size="lg"
          >
            Save Changes
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Editboard
