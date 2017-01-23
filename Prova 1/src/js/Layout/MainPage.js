import React from "react";
import { Link } from "react-router";
import Nav from "./Nav"


export default class MainPAge extends React.Component {
  render() {
    const { location } = this.props;
    return (
      <div>
      	<Nav/>
        {this.props.children}
      </div>

    );
  }
}