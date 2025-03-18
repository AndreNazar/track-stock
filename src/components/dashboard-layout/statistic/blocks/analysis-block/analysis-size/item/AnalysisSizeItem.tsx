import "./analysis-item.scss"

interface AnalysisSizeItemProps {
    info: {
        id: number,
        size: number,
        percent: number
    }
}

function AnalysisSizeItem({info}: AnalysisSizeItemProps) {

    return (
        <div className="analysis-item">
            <p className="analysis-item__size">{info.size} US</p>
            <div className="analysis-item__bar">
                <span style={{width: info.percent + "%"}} className="analysis-item__bar-track"></span>
                <span className="analysis-item__bar-label">{info.percent}%</span>
            </div>
        </div>
    )
}

export default AnalysisSizeItem