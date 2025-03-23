import { createRoot } from 'react-dom/client'
import './styles/index.scss'
import App from './App.tsx'
import { BrowserRouter } from 'react-router'
import { Provider } from 'react-redux'
import store from './redux/store.ts'
import { Suspense } from 'react'
import Loading from './components/ui/loadings/Loading.tsx'
import { ArcElement, BarElement, CategoryScale, Chart, Legend, LinearScale, LineElement, PointElement, Title, Tooltip } from 'chart.js'


Chart.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  ArcElement
);

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <BrowserRouter basename='/'>
      <Suspense fallback={<Loading />}>
        <App />
      </Suspense> 
    </BrowserRouter>
  </Provider>,
)
