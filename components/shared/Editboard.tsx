import React from 'react'
import Button from '../ui/Button'

const Editboard = () => {
  return (
    <div className="fixed h-full inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="flex flex-col px-6 bg-foreground w-[350px] rounded-lg py-6">
        <div>Edit Borad</div>

        {/* Forms */}
        <form>
          <label htmlFor="boradName">Borad Name</label>
          <input type="text" name="boradName" placeholder="Example Board" />

          <label htmlFor="BoradColumn">Borad Column</label>
          <input type="text" name="boradName" placeholder="Example Board" />

          <input type="text" name="boradName" placeholder="Example Board" />
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
