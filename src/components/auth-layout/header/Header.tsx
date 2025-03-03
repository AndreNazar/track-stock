import './header.scss'

function Header(){
    return <div className="header">
        <div className="header__container">
            <div className="header__logo">
                <a href="#">
                    <img src="/src/assets/imgs/logo.png" alt="TrackStock" />
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