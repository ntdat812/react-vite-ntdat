import Header from "./components/layout/header"
import Footer from "./components/layout/footer"
import { Outlet } from "react-router-dom"



const App = () => {


  return (
    <>
      <Header />
      {/* Outlet ứng với từng thằng con */}
      <Outlet />
      <Footer />
    </>
  )
}

export default App
