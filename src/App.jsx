import './App.css'
import { About, Contact, Events, Gallery, Home, Merchan, Songs } from './components'
import { NavBar } from './components/NavBar'

function App() {

  return (
    <>
      <NavBar/>
      <Home/>
      <About/>
      <Events/>
      <Songs/>
      <Merchan/>
      <Gallery/>
      <Contact/>
    </>
  )
}

export default App
