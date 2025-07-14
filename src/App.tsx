import './App.css'
import { useFetch } from './hooks';

const url = "https://jsonplaceholder.typicode.com/posts";
// const userURL = "https://jsonplaceholder.typicode.com/user";

interface Data {
  name: string;
  lastName: string;
  age: number;
}

function App() {
  const { data, error, loading } = useFetch<Data>(url)
  // const { data: dataUser, error: errorUser, loading: loadingUSer } = useFetch<{name: string}>(userURL)

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
