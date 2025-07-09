import './App.css'
import { useState } from 'react'
import { Button } from './components'

function App() {
  const [count, setCount] = useState(0)
  
  // Notas: EL batching en React hace que se agrupen las actualizaciones de estado y las ejecuta todas antes de renderizar para mejor optimización. El valor de count cambia cuando se renderice el componente, pero abajo como agrupa los set y no renderiza hasta el final, en cada intrucción el valor de count es 0 así que solo sumará el último que será en que renderice. Si le pasamos una función si que ejecuta la función una por una actualizando el valor del estado y renderizando al final con todas las operaciones ya ejecutadas. Por eso es buena práctica pasarle una función que toma de parámetro el último estado

  // const countMore = () => { 
  //   setCount(count +1)
  //   setCount(count +1)
  //   setCount(count +1)
  // }

  const countMore = () => {
    setCount((count) => count +1) // (valor actual del estado) => le suma uno 
    setCount((count) => count +1)
    setCount((count) => count +1)
  }

  return (
    <>
      <Button label={`Count is ${count}`} parentMethod={countMore}  />
    </>
  )
}

export default App
