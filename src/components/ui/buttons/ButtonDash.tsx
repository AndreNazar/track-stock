import "./button.scss";

interface PropsButtonDash {
  children: string,
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void,
  color?: string
}

function ButtonDash({children, color = "#56CCF2", onClick}: PropsButtonDash) {
  return (
    <button onClick={onClick} style={{border: `2px solid ${color}`}} className="button-dash">{children}</button>
  )
}

export default ButtonDash