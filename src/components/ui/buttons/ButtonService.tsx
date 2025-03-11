import { ReactNode } from "react";
import "./button.scss";

interface ButtonServiceProps {
  children: string | ReactNode
  isSelect: boolean
  onClick?: () => void
}

function ButtonService({children, isSelect, onClick}: ButtonServiceProps) {

  return (
    <button onClick={onClick} className={"button-service" + (isSelect ? " button-service--select" : "")}>{children}</button>
  )
}

export default ButtonService