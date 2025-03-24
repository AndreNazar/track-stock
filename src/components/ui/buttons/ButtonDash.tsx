import { COLOR_PRIMARY } from "../../../global-variables";
import "./button.scss";

interface PropsButtonDash {
  children: any,
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void,
  color?: string
}

function ButtonDash({children, color = COLOR_PRIMARY, onClick}: PropsButtonDash) {
  return (
    <button onClick={onClick} style={{border: `2px solid ${color}`}} className="button-dash">{children}</button>
  )
}

export default ButtonDash