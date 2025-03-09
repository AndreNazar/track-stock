import { createRoot } from 'react-dom/client'
import './styles/index.scss'
import App from './App.tsx'
import { BrowserRouter } from 'react-router'
import { Provider } from 'react-redux'
import store from './redux/store.ts'
import { Suspense } from 'react'
import Loading from './components/ui/loadings/Loading.tsx'

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <BrowserRouter basename='/track-stock'>
      <Suspense fallback={<Loading />}>
        <App />
      </Suspense> 
    </BrowserRouter>
  </Provider>,
)
