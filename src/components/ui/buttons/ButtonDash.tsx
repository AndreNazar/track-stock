import "./button.scss";

function ButtonDash({children}: {children: string}) {
  return (
    <button className="button-dash">{children}</button>
  )
}

export default ButtonDash