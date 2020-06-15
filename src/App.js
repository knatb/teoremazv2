import React from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container';
import AppBar from './Components/AppBar';
import Footer from './Components/Footer';
import PacketTable from './Components/PacketTable';
import Dashboard from './Pages/Dashboard';
import Services from './Pages/Services';
import Material from './Pages/Material';
import Contact from './Pages/Contact';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import Account from './Pages/Account';
import PaymentMethod from './Pages/PaymentMethod';

import bgImg from './images/fondo.jpg';
import './App.css';

import { saveState } from './localStorage' 

const useStyles = makeStyles({
  mainbody: {
    backgroundColor: '#2F0055',
    backgroundImage: `url(${bgImg})`,
    //backgroundRepeat: 'repeat',
    backgroundSize: '100% auto',
    minHeight: '100%'
  }
});

function App(props) {
  const { store } = props;
  store.subscribe(() => {
    saveState( {
      user: store.getState().user
    });
  })
  const styles = useStyles();
  return (
    <Provider store={store}>
      <div className={styles.mainbody}>
        <Router >
          <AppBar />
            <Container className={`app-content`}>
              <Switch>
                {/* when user accesses /dashboard, load Dashboard */}
                <Route path='/dashboard'>
                  <Dashboard />
                </Route>            
                <Route path="/services">
                  <Services />
                </Route>
                {/* when user accesses /posts, load PostsList */}
                <Route path="/packets">
                  <PacketTable/>
                </Route>
                <Route path="/material">
                  <Material/>
                </Route>
                <Route path="/contact">
                  <Contact />
                </Route>
                <Route path="/signin">
                  <SignIn />
                </Route>
                <Route path="/signup">
                  <SignUp />
                </Route>
                <Route path="/account">
                  <Account />
                </Route>
                <Route path="/payment">
                  <PaymentMethod />
                </Route>                
                {/* when user accesses EXACTLY /, redirect to /dashboard */}
                <Route exact path='/'>
                  <Redirect to='/dashboard' />
                </Route>
              </Switch>
            </Container>
          <Footer/>
        </Router>
      </div>
    </Provider>
  );
}
export default App;
