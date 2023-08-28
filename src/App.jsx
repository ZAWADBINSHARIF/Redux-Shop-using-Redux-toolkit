// external import
import { Outlet } from "react-router-dom"
import { Provider } from "react-redux"

// internal import
import Header from "./components/Header"
// import Footer from './components/Footer'
import store from "./cartSlice/store.js"

const App = () => {
  return (
    <div className="App">
      <Provider store={store}>

        <Header />
        <div className="container">
          <Outlet />
        </div>
        {/* <Footer /> */}

      </Provider>
    </div>

  )
}
export default App