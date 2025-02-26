import Main from '@/components/Main'
import NavbarWrapper from '@/components/NavbarWrapper'
import SidebarWrapper from '@/components/SidebarWrapper'
import Border from '@/components/ui/Border'

const Home = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <NavbarWrapper />

        <div className="flex flex-1">
          <SidebarWrapper />
          <div className="flex-1 flex flex-col overflow-hidden">
            <Border style="border-b-[1px] border-gray-600 hidden xl:block" />

            <main className="flex-1 overflow-x-auto scrollable-container whitespace-nowrap">
              <Main />
            </main>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
