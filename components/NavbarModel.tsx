type TNavbarModel = {
  openEdit: () => void
}

const NavbarModel = ({ openEdit }: TNavbarModel) => {
  return (
    <div className="rounded-md bg-foreground w-48 px-4 py-3 mr-2 my-1 text-[13px] flex-col flex items-start shadow-2xl shadow-Primary-buttonDark absolute right-0">
      <button
        className="text-Neutral-Secondary hover:text-Neutral-Primary py-2 transition-all duration-300 ease-in-out"
        onClick={openEdit}
      >
        Edit Board
      </button>
      <button className="text-Neutral-Secondary hover:text-Neutral-Primary py-2 transition-all duration-300 ease-in-out">
        Clear Board
      </button>
      <button className="text-secondary py-2">Delete Board</button>
      <button className="text-secondary py-2">Reset Boards</button>
    </div>
  )
}

export default NavbarModel
