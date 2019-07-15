import _ from "lodash";
import React, { Component } from "react";
import { View, Text, ListView, FlatList } from "react-native";
import { connect } from "react-redux";
import { employeesFetch } from "../actions/index";
import ListItem from "./ListItem";

class EmployeeList extends Component {
  componentDidMount() {
    this.props.employeesFetch();
  }

  renderItem(employee) {
    return <ListItem employee={employee} />;
  }

  render() {
    return (
      <FlatList
        data={this.props.employees}
        renderItem={this.renderItem}
        keyExtractor={employee => employee.uid.toString()}
      />
    );
  }
}

const mapStateToProps = state => {
  const employees = _.map(state.employees, (value, uid) => {
    return { ...value, uid };
  });
  return { employees };
};

export default connect(
  mapStateToProps,
  { employeesFetch }
)(EmployeeList);
