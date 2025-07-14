import './App.css'
import { useFetch } from './hooks';

const url = "https://jsonplaceholder.typicode.com/posts";

function App() {
  const { data, error, loading } = useFetch(url)
  
  if (loading) {
    return <div> Cargando...</div>
  }

  if (error) {
    return <div> UPS! Hay un error: {error.message}</div>
  }

  return (
    <div>{JSON.stringify(data)}</div>
  )
}

export default App
