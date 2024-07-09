import { Route, Routes } from 'react-router-dom'
import './App.scss'
import Layout from './components/Layout'
import IndexPage from './pages/IndexPage/IndexPage'

function App() {
  return (
    <>
      <Routes>
        <Route path={'/'} element={<Layout/>}>
          <Route index element={<IndexPage/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
