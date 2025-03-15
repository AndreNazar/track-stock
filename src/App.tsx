import { Navigate, Route, Routes, useNavigate } from "react-router-dom"
import AuthLayout from "./components/auth-layout/AuthLayout"
import Login from "./components/auth-layout/login/Login"
import Registration from "./components/auth-layout/registration/Registration"
import Recovery from "./components/auth-layout/recovery/Recovery"
import DashboardLayout from "./components/dashboard-layout/DashboardLayout"
import Inventory from "./components/dashboard-layout/inventory/Inventory"
import Statistic from "./components/dashboard-layout/statistic/Statistic"
import Account from "./components/dashboard-layout/account/Account"
import InventoryBrandsList from "./components/dashboard-layout/inventory/content/brands-list/InventoryBrandsList"
import InventoryProductsList from "./components/dashboard-layout/inventory/content/products-list/InventoryProductsList"
import { useDispatch, useSelector } from "react-redux"
import burger_svg from "./assets/imgs/control/burger.svg"
import { openMobileMenu } from "./redux/slices/menuSlice"
import { useEffect, useState } from "react"
import Loading from "./components/ui/loadings/Loading"
import Product from "./components/dashboard-layout/product/Product"
import AddProductDialog from "./components/dialogs/add-product/AddProductDialog"
function App() {

  const openAddProductDialog = useSelector((s:any) => s.dialog.dialogAddProduct)
  const isMobileMenu = useSelector((s:any) => s.menu.isMobileMenu)
  const dispatch = useDispatch()
  const [isGlobalLoading, setIsGlobalLoading] = useState<boolean>(true)
  const [isAuth, setIsAuth] = useState<boolean>(false)
  const navigate = useNavigate()
  
  useEffect(() => {
    if (!localStorage.getItem('access-token')) { // WARNING
      navigate("/login")
      setIsAuth(false)
    }else{
      setIsAuth(true)
    }
    setIsGlobalLoading(false)
  }, [])

  return isGlobalLoading 
  ? <div className="global-loading"><Loading/></div>
  : (<div>
      {isMobileMenu && <button onClick={() => dispatch(openMobileMenu())} className="menu-burger-button">
        <img src={burger_svg} alt="" />
      </button>}
      {openAddProductDialog && <AddProductDialog />}
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/recovery" element={<Recovery />} />
        </Route>
        {isAuth && <Route element={<DashboardLayout />}>
          <Route path="/inventory" element={<Inventory />}>
            <Route path="" element={<InventoryBrandsList />} />
            <Route path=":brand_name" element={<InventoryProductsList />} />
          </Route>
          <Route path="/statistic" element={<Statistic />} />
          <Route path="/account" element={<Account />} />
          <Route path="/inventory/:brand_name/:product_id" element={<Product />} />
        </Route>}
      </Routes>
    </div>
  )
}

export default App
