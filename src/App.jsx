import Aboutme from "./components/Aboutme"
import End from "./components/End"
import Navbar from "./components/Navbar"
import Works from "./components/Works"

function App() {

  return (
    <>
    <div className="wrapper">
    <Navbar/>
    <Aboutme/>
    <Works/>
    <End/>
    </div>
    </>
  )
}

export default App
