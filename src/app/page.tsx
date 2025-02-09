import NavbarWrapper from '@/components/NavbarWrapper'
import Sidebar from '@/components/Sidebar'

const Home = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <NavbarWrapper />

        <div className="flex flex-1">
          <Sidebar />
          <main className="flex-1">
            <div className="border-b-[1px] border-gray-600 hidden xl:flex"></div>
            main
          </main>
        </div>
      </div>
    </>
  )
}

export default Home
