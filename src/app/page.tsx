import MainWrapper from '@/components/MainWrapper'
import NavbarWrapper from '@/components/NavbarWrapper'
import SidebarWrapper from '@/components/SidebarWrapper'

const Home = () => {
  return (
    <>
      <div className="flex min-h-screen flex-col">
        <NavbarWrapper />

        <div className="flex flex-1">
          <SidebarWrapper />
          <MainWrapper />
        </div>
      </div>
    </>
  )
}

export default Home
