import { NavLink }   from "react-router-dom";
import account_svg   from "../../../../assets/imgs/tabs/account.svg";
import statistic_svg from "../../../../assets/imgs/tabs/statistic.svg";
import inventory_svg from "../../../../assets/imgs/tabs/inventory.svg";
import { switchTab } from "../../../../redux/slices/menuSlice";
import { useDispatch, useSelector } from "react-redux";

function Menu() {

    const currentTab = useSelector((s:any) => s.menu.currentTab);
    const dispatch = useDispatch();

    const tabs = [
        {
            name: "Аккаунт",
            icon: account_svg,
            link: "/account"
        },
        {
            name: "Статистика",
            icon: statistic_svg,
            link: "/statistic"
        },
        {
            name: "Инвентарь",
            icon: inventory_svg,
            link: "/inventory"
        }
    ]

  return (
    <nav className="menu">
      <ul className="menu__list">
        {tabs.map((tab, index) => <li key={index} className="menu__item">
                    <div className={`menu__link-highlight ${currentTab === index ? "menu__link-highlight--active" : ""}`}></div>
                    <NavLink onClick={() => dispatch(switchTab(index))} to={tab.link} className="menu__link">
                        <p className="menu__link-text">{tab.name}</p>
                        <img className="menu__link-icon" src={tab.icon} alt=""/>
                    </NavLink>
                </li>
            )}
      </ul>
    </nav>
  )
}

export default Menu