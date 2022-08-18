import React from 'react'
import{
  BrowserRouter as Router,
  Switch,
  Route,
}from 'react-router-dom'

import TemplateDefault from './templates/Default'
import Page from './templates/Page'

import Customers from './pages/Customers'
import Home from './pages/Home'

const App = () => {
  return (
    
    <Router>
        <TemplateDefault>     
          <Switch>
            <Route path="/customers">
              <Page title="Clientes" Component={Customers}/>
            </Route>
            <Route path="/">
              <Page title="Página Inicial" Component={Home}/>
            </Route>
          </Switch>
        </TemplateDefault>
    </Router>
    
  )
}

export default App
