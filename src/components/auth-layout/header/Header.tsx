import './header.scss'
import logo_img from "../../../assets/imgs/logo/logo.png"

function Header(){
    return <div className="header">
        <div className="header__container">
            <div className="header__logo">
                <a href="#">
                    <img src={logo_img} alt="TrackStock" />
                </a>
            </div>
            <nav className="header__menu">
                <ul className="header__menu-list">
                    {/* пока пусто, потом что-то будет наверное */}
                </ul>
            </nav>
        </div>
    </div>
}

export default Header