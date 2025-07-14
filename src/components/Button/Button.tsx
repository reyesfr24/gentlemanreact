import './Button.css'

interface Props {
	label: string,
	parentMethod: () => void
}

// Utility Type de Javascript
// Omit<Props, "parentMethod"> crea un tipo que tiene todas las propiedades de Props menos parentMethod. Esto sirve para reutilizar un tipo existente pero quitndole alguna propiedad. También existe "Pick" en vez de Omit que lo hace al contrario. Crea un nuevo tipo  solo las propiedades que le indiques de un tipo existente
export const ChildrenButton = ({ label }: Omit<Props, "parentMethod">) => {
  return( <div>{label}</div>)
}
export const ChildrenButton2 = ({ label }: Pick<Props, "label">) => {
  return( <div>{label}</div>)
}

export const Button = ({label, parentMethod}: Props) => {
  return (
    <button className="custom-button" onClick={parentMethod}>
      {label}
    </button>
  )
}