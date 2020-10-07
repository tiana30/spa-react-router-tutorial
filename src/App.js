import React from 'react';
import {Home, About, Contact} from './pages';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Footer, Nav} from './layout';
function App() {
  return (
    <div className='flex flex-col h-screen'>
    <Router>
    <Nav />
      <Switch>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route path='/about'>
        <About />
      </Route>
      <Route exact path='/contact'>
        <Contact />
      </Route>
      </Switch>
      <Footer />
    </Router>
    </div>
  );
}

export default App;
