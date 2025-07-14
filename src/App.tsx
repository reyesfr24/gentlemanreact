import './App.css'
import { Button } from './components'

function App() {
  const handleClick = () => {
    console.log("Click")
  }
  return (
    <Button label="Mi botón" parentMethod={handleClick}>{}</Button>
  )
}

export default App
