import "./App.css"
import About from "./Components/About"
import Advantages from "./Components/Advantages"
import Clients from "./Components/Clients"
import Footer from "./Components/Footer"
import Header from "./Components/Header"
import Hero from "./Components/Hero"
import Projects from "./Components/Projects"

function App() {
  return (
    <div className="App" class="font-Montserrat">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Clients />
      <Advantages />
      <Footer />
    </div>
  )
}

export default App
