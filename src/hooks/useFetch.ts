import { useEffect, useState } from "react"

type Data<T> = T | null;
type ErrorType = Error | null;


interface Params<T>{
  data: Data<T>;
  loading: boolean;
  error: ErrorType;
}

// T es un único tipo genérico compartido en toda la función. 
export const useFetch = <T>(url: string): Params<T> => {
  const [data, setData] = useState<Data<T>>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<ErrorType>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("Error en la petición")
        }

        const jsonData: T = await response.json();
        setData(jsonData)
      } catch (err) { // err es solo el nombre para referenciar el error capturado
        setError(err as Error) // se pone err as Error para poder tratar el error capturado como objeto Error y 
        // utilizar por ejemplo (err as Error).message para ver el mensaje de error
      } finally {
        setLoading(false)
      }
    }

    fetchData();

  }, [url])

  return { data, loading, error }

}