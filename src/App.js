import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from 'react-router-dom'

import TemplateDefault from './templates/Default'
import Page from './templates/Page'

import Home from './pages/Home'
import Customers from './pages/Customers'
import CustomersAdd from './pages/CustomersAdd'
import CustomersEdit from './pages/CustomersEdit'


function App() {
 
  return (
   
  

    <Router>
        <TemplateDefault>
        <Routes>
          
          <Route path='/customers' element={Page('Clientes', Customers)}></Route>
          <Route path='/customers/add' element={Page('Cadastro de Clientes', CustomersAdd)}></Route>        
          <Route path='/customers/edit/:id' element={Page('Editar Clientes', CustomersEdit)}></Route>        
          <Route path='/' element={Page('Home', Home)}></Route>  
          
          
          
        </Routes>
    </TemplateDefault>
      </Router>
    
  )
}

export default App
