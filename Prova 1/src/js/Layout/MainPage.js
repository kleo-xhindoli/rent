import React from "react";
import { Link } from "react-router";

export default class MainPAge extends React.Component {
  render() {
    const { location } = this.props;
    return (
      <div>
        {this.props.children}
      </div>

    );
  }
}