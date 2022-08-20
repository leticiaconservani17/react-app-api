import React from 'react'
import{
  BrowserRouter as Router,
  Route,
  Switch,
}from 'react-router-dom'

import TemplateDefault from './templates/Default'
import TemplateClean from './templates/Clean'
import Page from './templates/Page'

import CustomersEdit from './pages/customers/Edit' 
import CustomersRegister from './pages/customers/Register'
import CustomersList from './pages/customers/List'
import Login from './pages/Login'
import Home from './pages/Home'


const App = () => {
  return (
      <Router>
            <Switch>
              <Route path="/login">
                    <TemplateClean title="Login" Component={Login}/>
              </Route>
            <TemplateDefault>     
              <Route path="/customers/Edit/:id">
                    <Page title="Editar" Component={CustomersEdit}/>
                  </Route>
              <Route path="/customers/Add">
                    <Page title="Cadastro" Component={CustomersRegister}/>
              </Route>
              <Route path="/customers">
                    <Page title="Lista de usuários" Component={CustomersList}/>
              </Route>
              <Route path="/">
                  <Page title="Página Inicial" Component={Home}/>
              </Route>
            </TemplateDefault>  
            </Switch>
      </Router>
    
  )
}

export default App
