
import { COLOR_PRIMARY } from "../../../../../global-variables";
import { IProductSalesTab } from "../../../../../types/types"
import "./sales.scss"
import { Bar } from 'react-chartjs-2';

function Sales() {
  const tabs: IProductSalesTab[] = [
    {
      type: "all",
      title: "За все время",
      active: true,
    },
    {
      type: "6 months",
      title: "6 месяцев",
      active: false,
    },
    {
      type: "month",
      title: "Месяц",
      active: false,
    },
    {
      type: "week",
      title: "Неделя",
      active: false,
    },
  ]

  return (
    <div className="product__sales">
      <h3 className="product__sales-heading">Продажи</h3>
      <div className="product__sales-tabs">
        {tabs.map((t:IProductSalesTab) => (
          <div className={`product__sales-tab${t.active ? " product__sales-tab--active" : ""}`} key={t.type}>
            <p className="tab__title">{t.title}</p>
          </div>
        ))}
      </div>
        <div className="product__sales-graph">
          <Bar
            data={{
              labels: ['04.03.2025', '05.03.2025', '06.03.2025', '07.03.2025', '08.03.2025', '09.03.2025', '10.03.2025'],
              datasets: [{
                label: '# of Votes',
                data: [9, 12, 3, 5, 2, 3, 6, 5, 8],
                borderWidth: 1,
                backgroundColor: COLOR_PRIMARY,
                borderRadius: 10,
              }]
            }}
            options={{
              responsive: true,
              plugins: {
                legend: {
                  display: false,
                },
              },
              scales: {
                x: {
                  grid: {
                    display: true,
                    color: "#394974"
                  }
                },
                y: {
                  grid: {
                    display: true,
                    color: "#394974"
                  }
                }
              }
            }}
          />
        </div>
    </div>
  )
}

export default Sales
