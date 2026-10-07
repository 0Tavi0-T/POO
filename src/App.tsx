import './App.css'
import { Usuario } from './models/Usuario'
import { ContaBancaria } from './models/ContaBancaria'

function App() {
  const usuario = new Usuario('Ana', 25)
  const conta = new ContaBancaria(usuario)


  conta.depositar(250)

  return (
    <>
      <p>{usuario.apresentar()}</p>
      <p>{conta.verSaldo()}</p>
    </>
  )
}

export default App
