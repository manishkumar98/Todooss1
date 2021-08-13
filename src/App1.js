import "./styles.css";
import React from "react";
import "react-dropdown/style.css";
//import Card from "@material-ui/core/Card";
//import { CardContent } from "@material-ui/core";
import Appx from "./App1";
import App2 from "./App2";
import App3 from "./App3";
import App4 from "./App4";
import App from "./App";
class App1 extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <h2>ALL</h2>
        <ul>
          {this.props.list.map((item) => {
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

export default App1;
/*
<button
                  className="btn btn-floating"
                  onClick={() => {
                    if (item.type === "personal") {
                      this.deleteItem(item.id);
                      this.deleteItem1(item.id);
                    } else if (item.type === "office") {
                      this.deleteItem(item.id);
                      this.deleteItem2(item.id);
                    } else if (item.type === "shopping") {
                      this.deleteItem(item.id);
                      this.deleteItem3(item.id);
                    }
                  }}
                >
                  <i class="material-icons">x</i>
                </button>
*/
