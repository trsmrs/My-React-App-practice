import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'

import TemplateDefault from './templates/Default'
import Page from './templates/Page'

import Home from './pages/Home'
import Customers from './pages/Customers'


function App() {
  return (
   
  

    <TemplateDefault>
      <Router>
        <Routes>
          <Route path='/customers' element={Page('Clientes',<Customers />)}>
            
          </Route>
          
          <Route path='/' element={<Home />}></Route>
        </Routes>
      </Router>
    </TemplateDefault>
    
  )
}

export default App
