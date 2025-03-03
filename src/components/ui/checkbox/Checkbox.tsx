import "./checkbox.scss"

function Checkbox({checked, setChecked}: {checked: boolean, setChecked: (checked: boolean) => void}) {

  return (
    <div onClick={() => setChecked(!checked)} className="checkbox">
      {checked && <svg width="26" height="18" viewBox="0 0 26 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.996094 9.38095L8.73803 17L24.9961 1" stroke="#56CCF2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      </svg>}
    </div>
  )
}

export default Checkbox
