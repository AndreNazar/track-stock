import "./button.scss";

interface PropsButtonDash {
  children: string,
  color?: string
}

function ButtonDash({children, color = "#56CCF2"}: PropsButtonDash) {
  return (
    <button style={{border: `2px solid ${color}`}} className="button-dash">{children}</button>
  )
}

export default ButtonDash