import { NavLink } from "react-router-dom"
import export_svg from "../../../../assets/imgs/actions/export.svg"
import "./inventory-tabs.scss"

function InventoryTabs() {
  return (
    <div className="inventory__tabs">
      <ul className="inventory__tabs-list">
        <li className="inventory__tabs-item inventory__tabs-item--active">
          <NavLink to={""}>Мой инвентарь</NavLink>
        </li>
        <li className="inventory__tabs-item">
          <NavLink to={""}>Продажи</NavLink>
        </li>
      </ul>
      <div className="inventory__tabs-export">
        <img src={export_svg} alt="" />
      </div>
    </div>
  )
}

export default InventoryTabs