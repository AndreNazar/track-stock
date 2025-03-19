import { useEffect, useState } from "react"
import { Bar } from "react-chartjs-2"

function GraphicBar() {

  const [labels, setLabels] = useState(["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"])

  useEffect(() => {

    function handlerResize() {
      console.log(window.innerWidth)
      if (window.innerWidth < 888) {
        setLabels(["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"])
      }else{
        setLabels(["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"])
      }
    }

    window.addEventListener("resize", handlerResize)
    handlerResize()
    return () => window.removeEventListener("resize", handlerResize)
  }, [])

  return (<Bar
    data={{
      labels,
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