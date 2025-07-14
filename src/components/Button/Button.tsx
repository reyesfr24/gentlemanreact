import type { ReactNode } from 'react'
import './Button.css'

interface Props {
	children: ReactNode,
	parentMethod: () => void
}

export const ChildrenButton = ({ children }: Pick<Props, "children">) => {
  return({ children })
}

export const Button = ({children, parentMethod}: Props) => {
  return (
    <button className="custom-button" onClick={parentMethod}>
      {children}
    </button>
  )
}