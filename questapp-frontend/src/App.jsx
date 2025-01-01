
import './App.css'
import React from 'react';
import Header from './layout/Header';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Home from './pages/Home';



function App() {

  return (
    <div className="w-full bg-slate-200">
      <Header />
      <Switch>
        <Route>
          <Home />
        </Route>
      </Switch>
    </div>
  )
}

export default App
