import { Doughnut } from "react-chartjs-2"
import "./analysis-brands.scss"
import { useEffect, useState } from "react"
import Api from "../../../../../../api/api"

function AnalysisBrands() {

    const [brandsData, setBrandsData] = useState<{id: number, name: string, percent: number, color: string}[]>([])

    useEffect(() => {
        const colors = ["#56CCF2", "#2D9CDB", "#177FBB", "#0B5B89", "#002F4A", "#00131C", "#000000"]
        const api = new Api()
        api.getBrands().then(res => {
            setBrandsData(res.brands.map((b: any, i: number) => {
                return {
                    id: b.id,
                    name: b.name,
                    percent: Math.floor(Math.random() * (99 - 1 + 1)) + 1,
                    color: colors[i]
                }
            }))
        })
    }, [])

  return (
    <div className="analysis-brands">
      <p className="analysis-brands__title">Анализ по брендам</p>
      <div className="analysis-brands__diagram">
        <Doughnut
          data={{
            labels: brandsData.map(bd => bd.name), 
            datasets: [
              {
                label: "Продажи",
                data: brandsData.map(bd => bd.percent),
                backgroundColor: brandsData.map(bd => bd.color), 
                borderWidth: 0, 
              },
            ],
          }}
          options={{
            responsive: true,
            plugins: {
              legend: {
                position: "right",
                labels: {
                  color: "white", 
                  boxWidth: 50,
                  boxHeight: 30,
                  font: {
                    size: 14, 
                  },
                  padding: 16,
                },
              },
            },
          }}
        />
      </div>
    </div>
  )
}

export default AnalysisBrands
