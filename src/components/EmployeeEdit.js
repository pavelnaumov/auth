import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import Communications from "react-native-communications";
import { Card, CardSection, Button, ModalConfirm } from "./common";
import EmployeeForm from "./EmployeeForm";
import { employeeUpdate, employeeSave, employeeFire } from "../actions";

class EmployeeEdit extends Component {
  state = { showModal: false };

  componentDidMount() {
    _.each(this.props.employee, (value, prop) => {
      this.props.employeeUpdate({ prop, value });
    });
  }

  onButtonPress() {
    const { name, phone, shift } = this.props;

    this.props.employeeSave({
      name,
      phone,
      shift,
      uid: this.props.employee.uid
      // the uid comes from the press props
      // in the Actions
    });
  }

  onSendText() {
    const { phone } = this.props;
    Communications.textWithoutEncoding(phone, "Привет!");
  }

  onAccept() {
    this.props.employeeFire(this.props.employee.uid);
  }

  onDecline() {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <Card>
        <EmployeeForm />
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Submit Changes
          </Button>
        </CardSection>
        <CardSection>
          <Button onPress={this.onSendText.bind(this)}>Text Schedule</Button>
        </CardSection>

        <CardSection>
          <Button
            onPress={() => this.setState({ showModal: !this.state.showModal })}
          >
            Fire Employee
          </Button>
        </CardSection>

        <ModalConfirm
          visible={this.state.showModal}
          onAccept={this.onAccept.bind(this)}
          onDecline={this.onDecline.bind(this)}
        >
          Are you sure you want to fire this employee?
        </ModalConfirm>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  const { name, phone, shift } = state.employeeForm;
  return {
    name,
    phone,
    shift
  };
};

export default connect(
  mapStateToProps,
  { employeeUpdate, employeeSave, employeeFire }
)(EmployeeEdit);
