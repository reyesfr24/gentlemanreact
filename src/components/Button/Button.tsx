import type { ReactNode } from 'react'
import './Button.css'

// children es una prop especial que representa todo lo que colocas entre las etiquetas de apertura y cierre de un componente
// ReactNode es un tipo especial en TypeScript que viene de la librería de tipos de React. Se usa siempre para tipar con children

interface Props {
	children: ReactNode,
	parentMethod: () => void
}

interface ChildrenProps {
  children: ReactNode
}

export const ColorRed = ({ children }: ChildrenProps) => {
  return(<div className="color-red">{ children }</div>)
}

export const Button = ({children, parentMethod}: Props) => {
  return (
    <button className="custom-button" onClick={parentMethod}>
      {children}
    </button>
  ) 
}