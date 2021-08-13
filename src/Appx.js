import React from "react";
import "./styles.css";

import "react-dropdown/style.css";
//import Card from "@material-ui/core/Card";
//import { CardContent } from "@material-ui/core";
import App1 from "./App1";
import App2 from "./App2";
import App3 from "./App3";
import App4 from "./App4";
import App from "./App";
class Appx extends React.Component {
  render() {
    if (this.props.showGroup === "") {
      return (
        <App1
          list={this.props.list}
          newItem={this.props.newItem}
          newItemType={this.props.newItemType}
        />
      );
    } else if (this.props.showGroup === "personal") {
      return (
        <App2
          list1={this.props.list1}
          newItem={this.props.newItem}
          newItemType={this.props.newItemType}
        />
      );
    } else if (this.props.showGroup === "office") {
      return (
        <App3
          list2={this.props.list2}
          newItem={this.props.newItem}
          newItemType={this.props.newItemType}
        />
      );
    } else if (this.props.showGroup === "shopping") {
      return (
        <App4
          list3={this.props.list3}
          newItem={this.props.newItem}
          newItemType={this.props.newItemType}
        />
      );
    }
  }
}
export default Appx;
