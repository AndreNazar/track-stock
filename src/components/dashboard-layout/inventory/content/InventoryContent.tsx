import { Outlet } from "react-router"
import "./inventory-content.scss"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { switchTab } from "../../../../redux/slices/menuSlice"

function InventoryContent() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(switchTab("/inventory"))
  }, [])
  return (
    <div className="inventory__content">
      <Outlet />
    </div>
  )
}

export default InventoryContent
