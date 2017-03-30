import React, {Component} from 'react';
import {
  HashRouter,
  Route,
  Link
} from 'react-router-dom';
import Home from './pages/home.js'

const NoMatch = ({ location }) => (
  <div>
    <h3> Oooops...404</h3>
  </div>
)

class Router extends Component{
    render(){
        return <HashRouter>
                    <div>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                        </ul>
                        <hr/>
                        
                        <Route exact path="/" component={Home}/>
                        <Route component={NoMatch}/>
                    </div>
                </HashRouter >
    }
}
  
export default Router
