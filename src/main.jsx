import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'

import './index.css'
import './Responsive.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Page/HomePage/Home.jsx'
import ShopAll from './components/Page/ShopAllPage/ShopAll.jsx'
import ElectricScooter from './components/Page/ElectricScooterPage/ElectricScooter.jsx'
import Accessories from './components/Page/AccessoriesPage/Accessories.jsx'
import Contact from './components/Page/ContactPage/Contact.jsx'
import About from './components/Page/AboutPage/About.jsx'
import AddCart from './components/Page/AddCartPage/AddCart.jsx'

const router = createBrowserRouter([
  {path:'/' , element:<App/> ,children:[
  {
   path:'/', element:<Home/>,
  },
  {
    path:'/shopall',element:<ShopAll/>,
  },
  {
    path:'/electricscooter',element:<ElectricScooter/>,
  },
  {
    path:'/accessories',element:<Accessories/>,
  },
  {
    path:'/contact',element:<Contact/>,
  },
  {
    path:'/about',element:<About/>,
  },
  {
    path:'/addcart' ,element:<AddCart/>,
  }
]}
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>,
)
