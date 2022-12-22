import {
  BrowserRouter as Router,
  Routes,
  Route,

} from 'react-router-dom'
import { AuthProvider } from './state/Auth'

import TemplateDefault from './templates/Default'
import TemplatePage from './templates/Page'


import Login from './pages/Login'
import Home from './pages/Home'
import Customers from './pages/Customers'
import CustomersAdd from './pages/CustomersAdd'
import CustomersEdit from './pages/CustomersEdit'


function App() {


  return (
    <Router>
        <TemplateDefault>
          <Routes>
            <Route path='/login' element={TemplatePage('Login', Login)}></Route>
            <Route path='/' element={TemplatePage('Home', Home)}></Route>
            <Route path='/customers' element={TemplatePage('Clientes', Customers)}></Route>
            <Route path='/customers/add' element={TemplatePage('Cadastro de Clientes', CustomersAdd)}></Route>
            <Route path='/customers/edit/:id' element={TemplatePage('Editar Clientes', CustomersEdit)}></Route>
          </Routes>
        </TemplateDefault>
      </Router>
  )
}

export default App
