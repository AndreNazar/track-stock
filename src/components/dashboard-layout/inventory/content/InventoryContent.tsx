import { Outlet } from "react-router";
import "./inventory-content.scss"

function InventoryContent() {
  return (
    <div className="inventory__content">
        <Outlet />
    </div>
  );
}

export default InventoryContent