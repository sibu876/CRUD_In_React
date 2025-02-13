import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './Component/Home'
import Navbar from './Component/Navbar'
import Add from './Component/Add'
import Edit from './Component/Edit'

function App() {
 

  return (
    <>

    <BrowserRouter>
    <Navbar/>

    <Routes>
      <Route path = '/' element={ <Home/>}/>
      <Route path = '/edit' element={<Edit/>}/>
      <Route path = '/add' element= {<Add/>}/>
    </Routes>
   
    </BrowserRouter>
   
    </>
  )
}

export default App
