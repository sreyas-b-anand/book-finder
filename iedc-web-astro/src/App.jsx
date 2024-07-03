import Finder from './pages/Finder'
import Home from './pages/Home'
import { BrowserRouter, Route , Routes} from 'react-router-dom'
import './App.css'


function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Books' element={<Finder/>} />
      </Routes>
      </BrowserRouter>
    </>
  )
}
export default App
