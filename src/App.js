import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
//import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import store from './Store';
import 'bootstrap/dist/css/bootstrap.min.css';
import ParentComponent from './components/ParentComponent';


import FirebaseLogin from './components/FirebaseLogin';
import fire from './Fire';
import Favourites from './components/Favourites';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: {},
      component: ""
    }
  }
  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        //  var localStorage:Storage;
        // localStorage.setItem('user',user.uid);
      }
      else {
        this.setState({ user: null })
        //localStorage.removeItem('user');
      }
    })
  }



  render() {


    return (
      <Provider store={store}>
        <React.Fragment>


          <Switch>

            <Route exact path="/" component={this.state.user ? (ParentComponent) : (FirebaseLogin)} />
            
              <Route exact path="/home" component={ParentComponent} />
              <Route exact path="/favourites" component={Favourites} />
           

          </Switch>

        </React.Fragment>
      </Provider>

    );
  }
}

export default App;
