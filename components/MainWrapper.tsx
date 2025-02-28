'use client'
import Main from '@/components/Main'
import useToggleColor from '@/src/store/toggleColor'
import Border from './ui/Border'

const MainWrapper = () => {
  const isOn = useToggleColor((state) => state.isOn)
  return (
    <div className="flex flex-1 flex-col overflow-hidden">
      <Border
        style={`${isOn ? 'border-gray-300' : 'border-gray-600'} border-b-[1px] hidden xl:block`}
      />

      <main
        className={`${isOn ? 'light-scrollable-container' : 'scrollable-container'} flex-1 overflow-x-auto whitespace-nowrap`}
      >
        <Main />
      </main>
    </div>
  )
}

export default MainWrapper
