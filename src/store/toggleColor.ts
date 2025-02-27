import { create } from 'zustand'

type ToggleColor = {
  isOn: boolean
  toggle: () => void
}

const useToggleColor = create<ToggleColor>((set) => ({
  isOn: false,
  toggle: () => set((state) => ({ isOn: !state.isOn }))
}))

export default useToggleColor
