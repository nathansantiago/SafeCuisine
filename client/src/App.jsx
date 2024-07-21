import { Route, Routes } from 'react-router-dom'
import './App.scss'
import Layout from './components/Layout'
import IndexPage from './pages/IndexPage/IndexPage'
import SearchPage from './pages/SearchPage/SearchPage'
import RestaurantPage from './pages/RestaurantPage/RestaurantPage'
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000";

function App() {
  return (
    <>
      <Routes>
        <Route path={'/'} element={<Layout/>}>
          <Route index element={<IndexPage/>}/>
          <Route path={'search'} element={<SearchPage/>}/>
          <Route path={'restaurant/:id'} element={<RestaurantPage/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
