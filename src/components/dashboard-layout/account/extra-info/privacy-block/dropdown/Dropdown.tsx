import Select from "../../../../../ui/selects/Select"
import info_svg from "../../../../../../assets/imgs/actions/information.svg"
import "./dropdown.scss"

function Dropdown({data, title}: {data: string[], title: string}) {
  return (
    <div className="dropdown">
      <div className="dropdown__heading">
        <p className="dropdown__heading-text">{title}</p>
        <img className="dropdown__heading-information" src={info_svg} alt="i" />
      </div>
      <Select data={data} />
    </div>
  )
}

export default Dropdown
