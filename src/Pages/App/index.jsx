import { useRoutes , BrowserRouter } from 'react-router-dom';
import Navbar from '../../Components/Navbar'
import Home from '../Home'
import Asian from '../Asian'
import Colombian from '../Colombian';
import Sea from '../Sea';
import './App.css'
import FastFood from '../FastFood';

const AppRoutes = () => {
  let routes = useRoutes([
    { path:'/', element:<Home />},
    { path: '/Asian', element: <Asian /> },
    { path: '/fastFood', element: <FastFood /> },
    { path: '/Sea', element: <Sea /> },
    { path: '/Colombian', element: <Colombian /> },
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
