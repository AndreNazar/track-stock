import InventoryContent from "./content/InventoryContent"
import "./inventory.scss"
import InventorySearchBlock from "./search-block/InventorySearchBlock"
import InventoryTabs from "./tabs/InventoryTabs"

function Inventory(){
    return <div className="inventory">
        <InventoryTabs />
        <InventorySearchBlock />
        <InventoryContent />
    </div>
}

export default Inventory