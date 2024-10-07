import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Layout from './Layout';
import Home from './pages/Home';


import './App.css'

function App() {
  

  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route path='Home' element={<Home />} />
          </Routes>
        </Layout>
      </Router>

    </>
  )
}

export default App
