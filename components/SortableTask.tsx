import useToggleColor from '@/src/store/toggleColor'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'

type TSortableTask = {
  title: string
  id: number
  handleOpenSubTask: (taskId: string) => void
  length: number
}

const SortableTask = ({
  title,
  handleOpenSubTask,
  id,
  length
}: TSortableTask) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id })

  const isOn = useToggleColor((state) => state.isOn)

  const style = {
    transition,
    transform: CSS.Transform.toString(transform)
  }
  return (
    <div
      onClick={() => handleOpenSubTask(id.toString())}
      className="cursor-pointer touch-action-none"
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={style}
    >
      <div
        className={`${isOn ? 'bg-Neutral-Primary shadow-sm' : 'bg-foreground shadow-lg'} space-y-2 rounded-lg p-4 font-semibold shadow-Primary-buttonDark`}
      >
        <h3
          className={`${isOn ? 'text-Neutral-tertiary' : 'text-Neutral-Primary'} whitespace-normal break-words text-sm transition-all duration-300 hover:text-Primary-button`}
        >
          {title}
        </h3>
        <h4 className="text-xs text-Neutral-Secondary">
          2 of {length} subtasks
        </h4>
      </div>
    </div>
  )
}

export default SortableTask
