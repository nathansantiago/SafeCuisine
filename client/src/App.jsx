import { Route, Routes } from 'react-router-dom'
import './App.scss'
import Layout from './components/Layout'
import IndexPage from './pages/IndexPage/IndexPage'
import SearchPage from './pages/SearchPage/SearchPage'

function App() {
  return (
    <>
      <Routes>
        <Route path={'/'} element={<Layout/>}>
          <Route index element={<IndexPage/>}/>
          <Route path={'search'} element={<SearchPage/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
