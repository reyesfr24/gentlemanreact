import './App.css'
import { Button, ColorRed } from './components'

function App() {
  const handleClick = () => {
    console.log("Click hecho")
  }

  const dimeHola = () => {
    alert("hola!!")
  }

  return (
    <>
      <ColorRed><Button parentMethod={dimeHola}>Mi botón rojo</Button></ColorRed>
      <Button parentMethod={handleClick}>Mi botón normal</Button>
    </>
  )
}

export default App
