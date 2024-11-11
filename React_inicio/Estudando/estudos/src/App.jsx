import './App.css'
import Pessoa from './components/Pessoa'
import FotoItalo from './assets/italos-photo.png'
import Lista from './components/lista'
import Evento from './components/Evento'
import Form from './components/Form'

function App() {

  return (
    <>

      <h1>Página de Pessoas:</h1>

      <div id="cards">

        <Pessoa foto={FotoItalo} nome={'Ítalo'} idade={19} profissao={'Técnico em Química'}/>
        <Pessoa foto={'https://via.placeholder.com/200'} nome={'Andrezza'} idade={19} profissao={'Auxiliar de Engenharia'}/>
        <Pessoa foto={'https://via.placeholder.com/300'} nome={'Emilly'} idade={19} profissao={'Técnica em Segurança'}/>

      </div>

      {/* Avançando em Props */}

      <Lista />

      {/* Usando Eventos */}

      <Evento />

      <hr /><hr />


      <Form />
    </>

  )
}

export default App
