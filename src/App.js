import React from 'react';
import './App.css';
import Homepage from './pages/homepage/hompage.component';
import { Switch, Route } from 'react-router-dom';


const HatsPage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
)

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/hats' component={HatsPage} />
      </Switch>
      {/* <Homepage /> */}
    </div>
  );
}

export default App;
