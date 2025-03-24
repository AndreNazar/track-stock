import { NavLink } from "react-router-dom"
import "./inventory-tabs.scss"
import { eLocalTab } from "../../../../types/types"
import { useDispatch, useSelector } from "react-redux"
import { setLocalTab } from "../../../../redux/slices/productSlice"
import { useEffect, useMemo } from "react"

function InventoryTabs() {

  const dispatch = useDispatch()
  const localTab = useSelector((s: any) => s.product.localTab)
  
    const getMainLink = useMemo((): "inventory" | "sales" => {
      const local3symols = location.pathname.replace(/^\/+/, '').slice(0, 3)
      if (local3symols === "inv") return "inventory"
      if (local3symols === "sal") return "sales"
      return `inventory`
    }, [location.pathname])

    useEffect(() => {
      dispatch(setLocalTab(getMainLink))
    }, [location.pathname])

  return (
    <div className="inventory__tabs">
      <ul className="inventory__tabs-list">
        <li className={"inventory__tabs-item" + (localTab === eLocalTab.inventory ? " inventory__tabs-item--active" : "")}>
          <NavLink onClick={() => dispatch(setLocalTab("inventory"))} to={"/inventory"}>Мой инвентарь</NavLink>
        </li>
        <li className={"inventory__tabs-item" + (localTab === eLocalTab.sales ? " inventory__tabs-item--active" : "")}>
          <NavLink onClick={() => dispatch(setLocalTab("sales"))} to={"/sales"}>Продажи</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default InventoryTabs