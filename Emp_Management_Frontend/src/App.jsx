import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import ListEmployee from './components/ListEmployee'
import Employee from './components/Employee'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          {/* http://localhost:3000 */}
          <Route path='/' element={<ListEmployee />}></Route>
          {/* http://localhost:3000/employees */}
          <Route path='/employees' element={<ListEmployee />}></Route>
          {/* http://localhost:3000/add-employee */}
          <Route path='/add-employee' element={<Employee />} />
          {/* http://localhost:3000/edit-employee */}
          <Route path='/edit-employee/:id' element={<Employee />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
