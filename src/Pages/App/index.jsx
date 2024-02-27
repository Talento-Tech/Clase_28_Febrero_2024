import { useRoutes , BrowserRouter } from 'react-router-dom';
import Navbar from '../../Components/Navbar'
import Home from '../Home'
import Developers from '../Developers'
import './App.css'

const AppRoutes = () => {
  let routes = useRoutes([
    { path:'/', element:<Home />},
    { path: '/Developers', element: <Developers /> },
  ])
  return routes
}

const App = () => {

  return (
    <BrowserRouter>
      <AppRoutes />
      <Navbar />
    </BrowserRouter>
  )
}
export default App
