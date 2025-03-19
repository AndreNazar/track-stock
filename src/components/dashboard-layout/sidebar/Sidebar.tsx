import "./sidebar.scss"
import logoXL from "../../../assets/imgs/logo/logoXL.png"
import { NavLink } from "react-router-dom"
import Menu from "./menu/Menu"
import exit_svg from "../../../assets/imgs/tabs/exit.svg"
import close_menu_svg from "../../../assets/imgs/control/close_menu.svg"
import { useDispatch, useSelector } from "react-redux"
import { closeMobileMenu, makeMobileMenu, removeMobileMenu } from "../../../redux/slices/menuSlice"
import { useEffect, useMemo } from "react"

function Sidebar() {
  const dispatch = useDispatch()  
  const onMobileMenu = useSelector((s:any) => s.menu.onMobileMenu)
  const isMobileMenu = useSelector((s:any) => s.menu.isMobileMenu)

  const getClassSidebar = useMemo(():string => {
    if(!isMobileMenu) return ""
    if(onMobileMenu) return " sidebar--opened"
    else return " sidebar--closed"
  }, [onMobileMenu, isMobileMenu])

  useEffect(() => {
    const handleResize = () => {
      if(window.innerWidth <= 768) {
        dispatch(makeMobileMenu())
      }else{
        dispatch(removeMobileMenu())
      }
    }
    window.addEventListener("resize", handleResize)
    handleResize()
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <div className={"sidebar" + getClassSidebar}>
      {isMobileMenu && <button onClick={() => dispatch(closeMobileMenu())} className="sidebar__close">
        <img className="sidebar__close-icon" src={close_menu_svg} alt="" />
      </button>}
      <div className="sidebar__logo">
        <img src={logoXL} alt="" />
      </div>
      <Menu />
      <div className="sidebar__exit menu__item">
        <NavLink onClick={() => localStorage.removeItem("access-token")} to="/login" className="menu__link">
          <p className="menu__link-text">Выход</p>
          <img className="menu__link-icon" src={exit_svg} alt="" />
        </NavLink>
      </div>
    </div>
  )
}

export default Sidebar
