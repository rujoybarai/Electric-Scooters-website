
import { Outlet } from 'react-router-dom'
import './App.css'
import Home from './components/Page/HomePage/Home'
import MainStore from './Store/Store'


function App() {


  return (
    
   <MainStore>
   
      <Outlet/>
  </MainStore>
    
    
  )
}

export default App
