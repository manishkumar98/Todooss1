import "./styles.css";
import React from "react";
import "react-dropdown/style.css";
//import Card from "@material-ui/core/Card";
//import { CardContent } from "@material-ui/core";
import App1 from "./App1";
import App2 from "./App2";
import App from "./App3";
import App4 from "./App4";
import Appx from "./App";
class App3 extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <h2>Office</h2>
        <ul>
          {this.props.list2.map((item) => {
            return (
              <li key={item.id}>
                {item.value} {item.type}
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}

export default App3;
/*
 <button
                  className="btn btn-floating"
                  onClick={() => {
                    this.deleteItem2(item.id);
                    this.deleteItem(item.id);
                  }}
                >
                  <i class="material-icons">x</i>
                </button>
*/
