import { Header } from './componets/Header'
import Footer from './componets/Footer/Footer'
import Section from './componets/Section/Section'
import './App.css'

function App() {
  return (
    <>
      <Header title="Mi pagina web" show={true} />

      <Section />

      <Footer />
    </>
  )
}

export default App
