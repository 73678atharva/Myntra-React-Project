import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Bags from "./Components/Bags.jsx"
import Home from './route/Home.jsx'
import App from './route/App.jsx'
import {Provider} from "react-redux"
import myntraStore from './store/index.js'
const router = createBrowserRouter([{
  path: "/",
  element: <App />,
  children: [
    { path: "/", element: <Home /> },

    { path: "/bag", element: <Bags /> }

  ]
}]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store = {myntraStore}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
