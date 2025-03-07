import { createRoot } from 'react-dom/client'
import './styles/index.scss'
import App from './App.tsx'
import { BrowserRouter } from 'react-router'
import { Provider } from 'react-redux'
import store from './redux/store.ts'

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <BrowserRouter basename='/track-stock'>
      <App />
    </BrowserRouter>
  </Provider>,
)
