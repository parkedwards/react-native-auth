import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';

import { Header, Button, Spinner, Card, CardSection } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: null
    };
  }

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBPUn_lmfVvJy8BV5zVHhnpR01JD-XKcrI',
      authDomain: 'react-native-auth-17952.firebaseapp.com',
      databaseURL: 'https://react-native-auth-17952.firebaseio.com',
      storageBucket: 'react-native-auth-17952.appspot.com',
      messagingSenderId: '1025023417472'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderLogin() {
    console.log(this.state);
    switch (this.state.loggedIn) {
      case true:
        return (
          <Card>
            <CardSection>
              <Button onPress={() => firebase.auth().signOut()}>
                Log Out
              </Button>
            </CardSection>
          </Card>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size='large' />;
    }
  }

  render() {
    return (
      <View>
        <Header type={'Authentication'} />
        {this.renderLogin()}
      </View>
    );
  }
}

export default App;
