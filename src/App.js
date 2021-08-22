import "./App.css"
import About from "./Components/About"
import Advantages from "./Components/Advantages"
import Clients from "./Components/Clients"
import Header from "./Components/Header"
import Hero from "./Components/Hero"
import Projects from "./Components/Projects"

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Clients />
      <Advantages />
    </div>
  )
}

export default App
