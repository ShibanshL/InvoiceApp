import Try from './Component/Try'
import Edit from './Component/Edit'

import './App.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home1 from './Component/Home1';

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Switch>
              <Route exact path="/" component={Try}/>
              <Route exact path="/edit" component={Edit}/>
              <Route exact path="/nhome" component={Home1}/>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
