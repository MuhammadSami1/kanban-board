type TNavbarModel = {
  openEdit: () => void
  openClearBoard: () => void
  openDeleteBoard: () => void
  openResetBoard: () => void
  refMenu: React.RefObject<HTMLDivElement>
}

const NavbarModel = ({
  openEdit,
  refMenu,
  openClearBoard,
  openDeleteBoard,
  openResetBoard
}: TNavbarModel) => {
  return (
    <div
      className="rounded-md bg-foreground w-48 px-4 py-3 mr-2 my-1 text-[13px] flex-col flex items-start shadow-2xl shadow-Primary-buttonDark absolute right-0"
      ref={refMenu}
    >
      <button
        className="text-Neutral-Secondary hover:text-Neutral-Primary py-2 transition-all duration-300 ease-in-out"
        onClick={openEdit}
      >
        Edit Board
      </button>
      <button
        className="text-Neutral-Secondary hover:text-Neutral-Primary py-2 transition-all duration-300 ease-in-out"
        onClick={openClearBoard}
      >
        Clear Board
      </button>
      <button className="text-secondary py-2" onClick={openDeleteBoard}>
        Delete Board
      </button>
      <button className="text-secondary py-2" onClick={openResetBoard}>
        Reset Boards
      </button>
    </div>
  )
}

export default NavbarModel
