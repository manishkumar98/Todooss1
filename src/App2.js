import "./styles.css";
import React from "react";
import "react-dropdown/style.css";
//import Card from "@material-ui/core/Card";
//import { CardContent } from "@material-ui/core";
import App1 from "./App1";
import Appx from "./App2";
import App3 from "./App3";
import App4 from "./App4";
import App from "./App";
class App2 extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <h2>Personal</h2>
        <ul>
          {this.props.list1.map((item) => {
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

export default App2;
/*
 <button
                  className="btn btn-floating"
                  onClick={() => {
                    this.deleteItem1(item.id);
                    this.deleteItem(item.id);
                  }}
                >
                  <i class="material-icons">x</i>
                </button>
*/
