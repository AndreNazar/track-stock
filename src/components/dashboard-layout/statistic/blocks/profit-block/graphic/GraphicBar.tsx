import { Bar } from "react-chartjs-2"

function GraphicBar() {
  return (<Bar
    data={{
      labels: ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"],
      datasets: [
        {
          label: "Количество продаж",
          data: [2, 5, 1, 4, 2, 4, 7],
          borderWidth: 1,
          backgroundColor: "#56CCF2",
          borderRadius: 10,
        }
      ],
    }}
    options={{
      responsive: true,
      plugins: {
        legend: {
          display: false,
        }
      },
      scales: {
        x: {
          grid: {
            display: true,
            color: "#394974",
          },
        },
        y: {
          grid: {
            display: true,
            color: "#394974",
          },
        },
      },
    }}
  />
  )
}

export default GraphicBar   