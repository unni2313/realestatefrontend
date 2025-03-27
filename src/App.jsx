import './App.css'
import Home from './components/pages/Home'
import Navbar from './components/pages/Navbar'
import Listing from './components/pages/Listing'
import Add_property from './components/pages/Add_property'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import List from './components/pages/List'
function App() {
  return (
    <>
      <List/>
      <BrowserRouter>
      <Navbar/>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/listing" element={<Listing/>}/>
        <Route path="/add_property" element={<Add_property/>}/>
      </Routes>
      </BrowserRouter>
    
    </>
  )
}
export default App
