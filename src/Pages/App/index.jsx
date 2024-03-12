import { useRoutes , BrowserRouter } from 'react-router-dom';
import Navbar from '../../Components/Navbar'
/* Estilos */
import './App.css'
/* Pages */
import Home from '../Home'
import Asian from '../Asian'
import FastFood from '../FastFood';
import Sea from '../Sea';
import Colombian from '../Colombian';

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element:<Home /> },
    { path: '/Asian', element: <Asian /> },
    { path: '/FastFood', element: <FastFood /> },
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
