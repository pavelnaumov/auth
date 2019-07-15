import React, { Component } from "react";
import { Text, View, Picker } from "react-native";
import { CardSection, Input } from "./common";
import { connect } from "react-redux";
import { employeeUpdate } from "../actions";

class EmployeeForm extends Component {
  render() {
    return (
      <View>
        <CardSection>
          <Input
            label="Name"
            placeholder="Jane"
            onChangeText={name =>
              this.props.employeeUpdate({ prop: "name", value: name })
            }
            value={this.props.name}
          />
        </CardSection>

        <CardSection>
          <Input
            label="Phone"
            placeholder="555-222-111"
            onChangeText={phone =>
              this.props.employeeUpdate({ prop: "phone", value: phone })
            }
            value={this.props.phone}
          />
        </CardSection>

        <CardSection>
          <Text style={styles.pickerLabelStyle}>Shift</Text>
          <Picker
            selectedValue={this.props.shift}
            onValueChange={day =>
              this.props.employeeUpdate({ prop: "shift", value: day })
            }
            style={{ flex: 1 }}
          >
            <Picker label="Monday" value="Monday" />
            <Picker label="Tuesday" value="Tuesday" />
            <Picker label="Wednesday" value="Wednesday" />
            <Picker label="Thursday" value="Thursday" />
            <Picker label="Friday" value="Friday" />
            <Picker label="Saturday" value="Saturday" />
            <Picker label="Sunday" value="Sunday" />
          </Picker>
        </CardSection>
      </View>
    );
  }
}

const styles = {
  pickerLabelStyle: {
    paddingLeft: 20,
    fontSize: 18
  }
};

const mapStateToProps = state => {
  return {
    name: state.employeeForm.name,
    phone: state.employeeForm.phone,
    shift: state.employeeForm.shift
  };
};

export default connect(
  mapStateToProps,
  { employeeUpdate }
)(EmployeeForm);
