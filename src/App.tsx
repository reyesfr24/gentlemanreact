import './App.css'
import { Button, ChildrenButton } from './components'

function App() {
  const handleClick = () => {
    console.log("Click")
  }

  return (
    <Button parentMethod={handleClick}><ChildrenButton>My label</ChildrenButton></Button>
  )
}

export default App
