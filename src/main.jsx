import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
// import * as bootstrap from "bootstrap";

import { CookiesProvider } from 'react-cookie'
import DelayedImage from './lazy-image/LazyImage.jsx'
import Footer from './components/Footer.jsx'
import StopWatch from './lazy-image/Stopwatch.jsx'
import { BrowserRouter } from 'react-router-dom'
import Counter from './lazy-image/Counter.jsx'
import WithoutContextCounter from './Context-demo/WithoutContextCounter.jsx'
import ContextCounter from './Context-demo/ContextCounter.jsx'
import ContextDemo from './Context-demo/ContextDemo.jsx'
import Calculator from './Calculator/Calculator.jsx'
import RunningEffects from './lazy-image/RunningEffects.jsx'
import { Provider } from 'react-redux'
import store from './Store/store'
import UseCallback from './Context-demo/UseCallback.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <CookiesProvider>
<BrowserRouter>
<Provider store={store}>
<App />

</Provider>
</BrowserRouter>
  </CookiesProvider>
  </StrictMode>,
)
