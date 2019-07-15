import React, { Component } from "react";
import { Card, CardSection, Input, Button, Spinner } from "./common";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import { emailChanged, passwordChanged, loginUser } from "../actions";

class LoginForm extends Component {
  onEmailChange(email) {
    this.props.emailChanged(email);
  }

  onPasswordChange(password) {
    // calling an action creator
    this.props.passwordChanged(password);
  }

  onButtonPress() {
    const { email, password } = this.props;
    // make sure to pass an object
    // since we specified this behaviour
    // in the action creator
    this.props.loginUser({ email, password });
  }

  renderError() {
    if (this.props.error) {
      return (
        <View style={{ backgroundColor: "white" }}>
          <Text style={styles.errorTextStyle}>{this.props.error}</Text>
        </View>
      );
    }
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }

    return (
      <Button
        onPress={(email, password) => this.onButtonPress({ email, password })}
      >
        Login
      </Button>
    );
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="email@gmail.com"
            onChangeText={email => this.onEmailChange(email)}
            value={this.props.email}
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            label="Password"
            placeholder="password"
            onChangeText={password => this.onPasswordChange(password)}
            value={this.props.password}
          />
        </CardSection>

        {this.renderError()}

        <CardSection>{this.renderButton()}</CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    color: "red",
    fontSize: 20,
    alignSelf: "center"
  }
};

const mapStateToProps = state => {
  return {
    email: state.auth.email,
    password: state.auth.password,
    user: state.auth.user,
    error: state.auth.error,
    loading: state.auth.loading
  };
};

export default connect(
  mapStateToProps,
  { emailChanged, passwordChanged, loginUser }
)(LoginForm);
