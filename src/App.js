// import logo from './logo.svg';
import React,{ Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Blog from './components/blogs/Blog';
import Home from './pages/HomePage/Home';
import About from './pages/AboutPage/About';
class App extends Component{
  render(){
    return (
      <Router>
        <div className="App">
          <Navbar/>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/about' component={About}/>
            <Route exact path='/blog/:title' component={Blog}/>
          </Switch>
        </div>
      </Router>
    );
  }
  
}

export default App;
