import React from 'react';
import home from './containers/Home.js'
import Contact from './containers/Contact.js'
import About from './containers/About.js'
import Login from './containers/Login.js'
import SignUp from './containers/SignUp.js'
import Listing from './containers/Listing.js'
import ListingDetail from './containers/ListingDetail.js'
import NotFound404 from './components/NotFound404'
import {Provider} from 'react-redux'
import store from './store'
import {BrowserRouter as Router ,Route, Switch,} from 'react-router-dom';
import PrivateRoute from './components/privateRoute';

import Layout from './hocs/Layout'

import './sass/main.scss'

const App=()=> {
  return(
    <Provider store={store}>
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/" component={home}/>
            <Route exact path="/contact" component={Contact}/>
            <Route exact path="/about/detail" component={About}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/signup" component={SignUp}/>
            <Route exact path="/listings/" component={Listing}/>
            <PrivateRoute exact path="/listings/:id" component={ListingDetail}/>
            <Route component={NotFound404}/>
          </Switch>
        </Layout>
    </Router>
  </Provider>
  )
  
}



export default App;
