// external import
import { Outlet } from "react-router-dom"

// internal import
import Header from "./components/Header"
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Header />
      <div className="container">
        <Outlet />
      </div>
      <Footer />
    </>

  )
}
export default App