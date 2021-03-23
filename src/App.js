import React , {Component} from 'react'
import {Navbar, NavbarBrand} from 'reactstrap'
import './App.less';
import Menu from './components/MenuComponent';

class App extends Component {
  render(){
  return (
    <>
      <Navbar dark color="primary">
        <div className="container">
        <NavbarBrand href="/">Ristorante Con fusion</NavbarBrand>
        </div>
      </Navbar>
      <Menu/>
    </>
  );
}
}

export default App;