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
import { useEffect, useMemo, useState } from "react"
import Loading from "./components/ui/loadings/Loading"
import Product from "./components/dashboard-layout/product/Product"
import AddProductDialog from "./components/dialogs/add-product/AddProductDialog"
import EditProductDialog from "./components/dialogs/edit-product/EditProductDialog"
import DeleteProduct from "./components/dialogs/delete-product/DeleteProduct"
import ContextList from "./components/ui/contexts/ContextList"
import { ICalendarData, IContextBlock } from "./types/types"
import { DayPicker } from "react-day-picker"
import { setCalendarData } from "./redux/slices/dialogSlice"
import { format, isValid, parse } from "date-fns"
import PopapStatus from "./components/ui/dialog/PopapStatus"

function App() {
  const openAddProductDialog = useSelector((s:any) => s.dialog.dialogAddProduct)
  const openEditProductDialog = useSelector((s:any) => s.dialog.dialogEditProduct)
  const opendialogDeleteProduct = useSelector((s:any) => s.dialog.dialogDeleteProduct)
  const contextBlock: IContextBlock = useSelector((s:any) => s.dialog.contextBlock)
  const calendarData: ICalendarData = useSelector((s:any) => s.dialog.calendarData)
  const popapData = useSelector((s:any) => s.dialog.popapData)
  const isMobileMenu = useSelector((s:any) => s.menu.isMobileMenu)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [isGlobalLoading, setIsGlobalLoading] = useState<boolean>(true)
  const [isAuth, setIsAuth] = useState<boolean>(false)
  
  
function parseDateString(dateString: string, formatStr: string): Date | null {
  try {
    const parsed = parse(dateString, formatStr, new Date());
    return isValid(parsed) ? parsed : null;
  } catch {
    return null;
  }
}

    const isActiveDialog = useMemo(() => {
      return openAddProductDialog || openEditProductDialog || opendialogDeleteProduct
    }, [openAddProductDialog, openEditProductDialog, opendialogDeleteProduct])
  
  useEffect(() => {
    if (!localStorage.getItem('access-token')) { // WARNING
      navigate("/login")
      setIsAuth(false)
    }else{
      setIsAuth(true)
    }
    setIsGlobalLoading(false)
  }, [isAuth])


  return isGlobalLoading 
  ? <div className="global-loading"><Loading/></div>
  : (<div className={"global-wrapper" + (isActiveDialog ? " global-wrapper--blockscroll" : "")}>
      {isMobileMenu && <button onClick={() => dispatch(openMobileMenu())} className="menu-burger-button">
        <img src={burger_svg} alt="" />
      </button>}
      {popapData.isOpen && <PopapStatus text={popapData.text} status={popapData.status} />}
      {openAddProductDialog && <AddProductDialog />}
      {openEditProductDialog && <EditProductDialog />}
      {opendialogDeleteProduct && <DeleteProduct />}
      {contextBlock && <ContextList 
        title={contextBlock.title}
        list={contextBlock.list}
        top={contextBlock.top}
        left={contextBlock.left}
        width={contextBlock.width}
        type={contextBlock.type}
        firstClick={contextBlock.firstClick}
      />}
      {calendarData.isOpen && <div className="calendar-popup">
        <DayPicker
          animate
          mode="single"
          selected={parseDateString(calendarData.date, "yyyy-dd-MM")!}
          onSelect={(date: Date | undefined) => dispatch(setCalendarData({
            isOpen: false,
            date: date ? format(date, "yyyy-dd-MM") : format(Date.now(), "yyyy-dd-MM")
          }))}
        />
        </div>}
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
            <Route path=":brand_name" element={<InventoryProductsList  />} />
          </Route>
          <Route path="/sales" element={<Inventory />}>
            <Route path="" element={<InventoryBrandsList />} />
            <Route path=":brand_name" element={<InventoryProductsList  />} />
          </Route>
          <Route path="/statistic" element={<Statistic />} />
          <Route path="/account" element={<Account />} />
          <Route path="/inventory/:brand_name/:product_id" element={<Product />} />
          <Route path="/sales/:brand_name/:product_id" element={<Product />} />
        </Route>}
      </Routes>
    </div>
  )
}

export default App
