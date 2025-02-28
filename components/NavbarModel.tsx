import useToggleColor from '@/src/store/toggleColor'

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
  const isOn = useToggleColor((state) => state.isOn)
  return (
    <div
      className={`${isOn ? 'bg-Neutral-Primary' : 'bg-foreground'} absolute right-0 my-1 mr-2 flex w-48 flex-col items-start rounded-md px-4 py-3 text-[13px] shadow-2xl shadow-Primary-buttonDark`}
      ref={refMenu}
    >
      <button
        className={`${isOn ? 'hover:text-Neutral-tertiary' : 'hover:text-Neutral-Primary'} py-2 text-Neutral-Secondary transition-all duration-300 ease-in-out`}
        onClick={openEdit}
      >
        Edit Board
      </button>
      <button
        className={`${isOn ? 'hover:text-Neutral-tertiary' : 'hover:text-Neutral-Primary'} py-2 text-Neutral-Secondary transition-all duration-300 ease-in-out`}
        onClick={openClearBoard}
      >
        Clear Board
      </button>
      <button className="py-2 text-secondary" onClick={openDeleteBoard}>
        Delete Board
      </button>
      <button className="py-2 text-secondary" onClick={openResetBoard}>
        Reset Boards
      </button>
    </div>
  )
}

export default NavbarModel
