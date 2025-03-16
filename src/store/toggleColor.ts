import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type ToggleColor = {
  isOn: boolean
  toggle: () => void
}

const useToggleColor = create<ToggleColor>()(
  persist(
    (set) => ({
      isOn: false,
      toggle: () => set((state) => ({ isOn: !state.isOn }))
    }),
    {
      name: 'toggle-color-storage'
    }
  )
)

export default useToggleColor
