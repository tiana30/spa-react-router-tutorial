import React from 'react';
import {Home, About, Contact} from './pages';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import {Footer, Nav} from './layout';
import NotFound from './pages/404';
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
      <Route path='/contact'>
        <Contact />
      </Route>
      <Route path='/404'>
        <NotFound />
      </Route>
      <Redirect to='/404' />
      </Switch>
      <Footer />
    </Router>
    </div>
  );
}

export default App;
