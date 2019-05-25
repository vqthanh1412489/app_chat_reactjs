import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Nav from './components/Nav/index';
import routes from './routes';


class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <div className="container">
                <div className="row  mg100">
                    <div className="col-md-12">
                        <Nav/>
                    </div>

                    <Switch>
                        { this.showRoutes(routes) }
                    </Switch>
                </div>
            </div>
        </BrowserRouter>
    );
  }

  showRoutes = routes => {
    var result = null;
    if (routes.length > 0) {
        result = routes.map((route, index) => {
            return(
                <Route
                    key={index}
                    path={route.path}
                    component={route.main}
                    exact={route.exact}
                />
            );
        });
    }
    return result;
}
}

export default App;
