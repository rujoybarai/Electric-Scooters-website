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
import { ToastContainer } from 'react-toastify';
import Acount from './components/Page/AccountPage/Acount.jsx'
import Login from './components/Page/AccountPage/Login.jsx'
import ProductDetails from './components/Page/ProductDetailsPage/ProductDetails.jsx'
import Registration from './components/Page/AccountPage/Registration.jsx'
import Profile from './components/Page/AccountPage/Profile.jsx'
  

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
  },
  {
    path:'/account', element:<Acount/>,children:[
      {
        path:'login', element:<Login/>,
      },
      {
        path:'registration', element:<Registration/>,
      },
      {
        path:'profile', element:<Profile/>,
      },
      {
        element:<Login/>,index:true,
      }
    ]
  },
  {
    path:"/productdetails", element:<ProductDetails/>,
  }
]}
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
     <ToastContainer />
   <RouterProvider router={router}/>
  </StrictMode>,
)
