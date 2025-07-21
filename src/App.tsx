import './App.css'
import { AppForm, Button, ColorRed } from './components'

function App() {
  
  const submit = () => {
    console.log("Submitted")
  }
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
      <AppForm>
        <button type="submit" onClick={submit}></button>
      </AppForm>
    </>
  )
}

export default App
