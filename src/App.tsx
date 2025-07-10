import './App.css'
import { useCallback, useEffect, useState } from 'react'

function App() {

  // useEffect: Ejecutar lógica cuando se renderiza el componente! y cuando cambia el array de dependencias. Utilizado cuando se manejala entrada de entidades externas al componente como endpoints, operaciones async, parámetros de entrada, etc

  // useEffect(() => {
  //   console.log("useEffect ejecutado")

  //   return () => {} // Se utiliza para limpiar y desuscribirse cuando se desmonta el componente
  // }, []) // Array de dependencias que al cambiar los elementos que contengan se ejecuta la lógica

  const [data, setdata] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  
  const fetchData = async () => {
    setLoading(true)
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts")

      if (!response.ok) {
        throw new Error ("Error al obtener datos") // Esto lo recibe el catch
      }
      
      const jsonData = await response.json()
      setdata(jsonData)
    } catch (err) {
      setError(err as string) // Le ponemos as string porque en el thorow error hemos establecido que será un string
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  if (loading) {
    return <div> Cargando...</div>
  }

  if (error) {
    return <div> UPS! Hay un error: {error}</div>
  }

  return (
    <div>{JSON.stringify(data)}</div>
  )


}

export default App
