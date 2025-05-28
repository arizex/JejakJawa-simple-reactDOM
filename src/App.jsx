import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Article from './pages/Article'
import Footer from './components/Footer'

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={
          <>
          <Home />
          <About />
          </>
          } 
          />
          <Route path='/Article' element={<Article />}/>
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
