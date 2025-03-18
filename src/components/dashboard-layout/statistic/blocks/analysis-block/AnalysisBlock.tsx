import "./analysis-block.scss"
import AnalysisBrands from "./analysis-brands/AnalysisBrands"
import AnalysisSize from "./analysis-size/AnalysisSize"

function AnalysisBlock() {
  


  return (
    <div className="analysis-block">
      <AnalysisSize />
      <div className="analysis-block__between"></div>
      <AnalysisBrands />
    </div>
  )
}

export default AnalysisBlock