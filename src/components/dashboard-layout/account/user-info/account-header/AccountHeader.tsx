import "./account-header.scss"

interface AccountHeaderProps {
  avatar: string
  nickname: string
  mail: string
  isOpenEditBlock: boolean
  setOpenEditBlock: (a: boolean) => void
}

function AccountHeader({avatar, nickname, mail, isOpenEditBlock, setOpenEditBlock}:AccountHeaderProps) {
  return (
    <div className="account-header">
      <div className="account-header__avatar">
        <img className="account-header__avatar-image" src={avatar} alt="avatar" />
      </div>
      <div className="account-header__text">
        <h3 className="account-header__text-nickname">{nickname}</h3>
        <p className="account-header__text-mail">{mail}</p>
      </div>
      <div onClick={() => setOpenEditBlock(!isOpenEditBlock)} className="account-header__control">
        <p className="account-header__control-text">{!isOpenEditBlock ? "Редактировать" : "Закрыть"}</p>
      </div>
    </div>
  );
}

export default AccountHeader