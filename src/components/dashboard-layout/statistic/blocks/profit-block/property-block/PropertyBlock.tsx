import Property from "../../../../../ui/property/Property"
import "./property-block.scss"

function PropertyBlock () {

    return (
        <div className="property-block">
            <Property title="Сумма продаж" value="280 450 ₽" />
            <Property title="Общая прибыль" value="120 450 ₽" />
            <Property title="Количество продаж" value="14" />
        </div>
    )
}

export default PropertyBlock