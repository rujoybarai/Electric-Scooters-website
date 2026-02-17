
import { Outlet } from 'react-router-dom'
import './App.css'
import Home from './components/Page/HomePage/Home'
import MainStore from './Store/Store'
import Firebase from './Store/Firebase'


function App() {


  return (
    
   <MainStore>
    <Firebase>
   
      <Outlet/>

      </Firebase>
  </MainStore>
    
    
  )
}

export default App
