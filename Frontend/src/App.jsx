import Home from "./Components/Home"
import Login from "./Components/Login"
import Upload from "./Components/Upload"
import Profile from "./Components/Profile"
import {BrowserRouter, Route, Routes} from 'react-router'


function App() {
 

  return (
    <>
     <BrowserRouter>
     
     <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/upload' element={<Upload />} />
        <Route path='/profile' element={<Profile />} />
     </Routes>

     </BrowserRouter>
    </>
  )
}

export default App
