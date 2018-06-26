import React, { Component } from 'react';

import Footer from '../components/Footer/Footer';
import Login from '../components/Login/Login';
import Cinemas from '../components/Cinemas/Cinemas';
import { BrowserRouter, Route, NavLink, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <div>
            <nav>
              <ul>
                <li> <NavLink exact to='/login'> Login</NavLink> </li>
                <li> <NavLink exact to={{ pathname: '/add-new'}}> Add new </NavLink> </li>
              </ul>
            </nav>

  
            <main>
              <Switch>
                <Route exact path='/login' component={Login} />
                <Route exact path='/cinemas' component={Cinemas} />
                {/* <Route exact path='/orders/:id' component={} />
                <Route render={() => <h2> Nqma takava stranica </h2>} /> */}
              </Switch>
            </main>
  
            <Footer>
            </Footer>
          </div>
        </BrowserRouter >
    );
  }
}

export default App;
