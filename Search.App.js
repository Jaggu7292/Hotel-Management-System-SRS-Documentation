import logo from './logo.svg';
import './App.css';


import {SearchRoom} from './SearchRoom';
import {Aboutus} from './Aboutus';
import {logout} from './logout';
import {Navigation} from './Navigation';

import {BrowserRouter, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="container">
     <h1 className="m-3 d-flex justify-content-center">
           Group 4 Residency
     </h1>

     <Navigation/>

     <Switch>
      
       <Route path='/SearchRoom' component={SearchRoom}/>
       <Route path='/Aboutus' component={Aboutus}/>
       <Route path='./logout' component={logout}/>
       
     </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;