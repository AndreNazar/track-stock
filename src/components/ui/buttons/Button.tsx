import { ReactNode } from "react";
import "./button.scss";

function Button({children, onClick}: {children: string | ReactNode, onClick?: () => void}) {
  return (
    <button onClick={onClick} className="button">{children}</button>
  )
}

export default Button