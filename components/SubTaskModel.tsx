type TSubTaskModel = {
  refSubTaskModel: React.RefObject<HTMLDivElement>
  openDeleteBoardModel: () => void
}

const SubTaskModel = ({
  refSubTaskModel,
  openDeleteBoardModel
}: TSubTaskModel) => {
  return (
    <div
      className="absolute top-1/2 left-[99%] md:left-2/3 transform md:-translate-x-2/3 -translate-x-[99%] -translate-y-1/2"
      ref={refSubTaskModel}
    >
      <div className="bg-Neutral-Primary flex w-52 flex-col items-start rounded-md px-4 py-3 text-[13px] shadow-2xl shadow-Primary-buttonDark">
        <button className="hover:text-Neutral-tertiary py-2 text-Neutral-Secondary transition-all duration-300 ease-in-out">
          Edit Board
        </button>
        <button className="py-2 text-secondary" onClick={openDeleteBoardModel}>
          Delete Board
        </button>
      </div>
    </div>
  )
}

export default SubTaskModel
