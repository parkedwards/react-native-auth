import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';

import {
  Card,
  CardSection,
  Button,
  Input,
  Spinner
} from './common';


class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: '',
      isFetching: false
    };

    this.authenticateUser = this.authenticateUser.bind(this);
    this.onLoginSuccess = this.onLoginSuccess.bind(this);
    this.onLoginFail = this.onLoginFail.bind(this);
  }

  authenticateUser() {
    const { email, password } = this.state;

    // resets error message every time button is pressed
    // also initiates spinner by indicating fetch has commenced
    this.setState({ error: '', isFetching: true });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess)
      .catch(() => firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(this.onLoginSuccess)
        .catch(this.onLoginFail)
      );
  }

  onLoginSuccess() {
    this.setState({
      email: '',
      password: '',
      isFetching: false,
      error: ''
    });
  }

  onLoginFail() {
    this.setState({ error: 'Authentication Failed', isFetching: false });
  }

  renderButton() {
    if (this.state.isFetching) {
      return <Spinner size='small' />;
    }

    return <Button onPress={this.authenticateUser}>Log In</Button>;
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            value={this.state.email}
            placeholder={'user@gmail.com'}
            handleChange={email => this.setState({ email })}
            label={'E-mail'}
          />
        </CardSection>

        <CardSection>
          <Input
            value={this.state.password}
            placeholder={'password'}
            handleChange={password => this.setState({ password })}
            label={'Password'}
            secureTextEntry
          />
        </CardSection>

        <Text style={styles.errorStyle}>{this.state.error}</Text>


        <CardSection>
          {this.renderButton()}
        </CardSection>

      </Card>
    );
  }
}

export default LoginForm;

const styles = {
  errorStyle: {
    color: 'red',
    fontSize: 20,
    alignSelf: 'center'
  }
};