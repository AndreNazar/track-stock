import { InfoList } from "../../../../../types/types"
import Property from "../../../../ui/property/Property"
import "./info.scss"


function Info({infoList}:{infoList: InfoList[]}){

    return <div className="product__info">
    <ul className="product__info-list">
        {infoList.map((item: InfoList) => <li key={item.title} className="product__info-item">
            <img className="product__info-icon" src={item.img} alt="" />
            <Property title={item.title} value={item.value} />
        </li>
        )}
    </ul>
</div>
}

export default Info