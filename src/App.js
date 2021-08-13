import React from "react";
import "./styles.css";

import "react-dropdown/style.css";
//import Card from "@material-ui/core/Card";
//import { CardContent } from "@material-ui/core";
import App1 from "./App1";
import App2 from "./App2";
import App3 from "./App3";
import App4 from "./App4";
import Appx from "./Appx";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newItem: "",
      newItemType: "",
      showGroup: "",
      list: [],
      list1: [],
      list2: [],
      list3: []
      // type: []
    };
  }
  updateInput(key, value) {
    this.setState({ [key]: value });
  }

  addItem() {
    const newItem = {
      id: 1 + Math.random(),
      value: this.state.newItem,
      type: this.state.newItemType
    };

    const list = [...this.state.list];
    const list1 = [...this.state.list1];
    const list2 = [...this.state.list2];
    const list3 = [...this.state.list3];
    if (newItem.type === "personal") list1.push(newItem);
    if (newItem.type === "office") list2.push(newItem);
    if (newItem.type === "shopping") list3.push(newItem);

    list.push(newItem);

    this.setState({
      list,
      list1,
      list2,
      list3,
      newItem: "",
      newItemType: "",
      showGroup: ""
    });
  }

  deleteItem(id) {
    const list = [...this.state.list];

    const updatedList = list.filter((item) => item.id !== id);

    this.setState({ list: updatedList });
  }
  deleteItem1(id) {
    const list1 = [...this.state.list1];

    const updatedList = list1.filter((item) => item.id !== id);

    this.setState({ list1: updatedList });
  }
  deleteItem2(id) {
    const list2 = [...this.state.list];

    const updatedList = list2.filter((item) => item.id !== id);

    this.setState({ list2: updatedList });
  }
  deleteItem3(id) {
    const list3 = [...this.state.list];

    const updatedList = list3.filter((item) => item.id !== id);

    this.setState({ list3: updatedList });
  }
  render() {
    return (
      <>
        <h1 className="app-title">MY LIST</h1>

        <div className="container">
          <div
            style={{
              padding: 30,
              textAlign: "left",
              maxWidth: 500,
              margin: "auto"
            }}
          >
            Add an Item...
            <br />
            <input
              type="text"
              placeholder="Type item here"
              value={this.state.newItem}
              onChange={(e) => this.updateInput("newItem", e.target.value)}
            />
            <label>
              <select
                name="type"
                value={this.state.newItemType}
                onChange={(e) =>
                  this.updateInput("newItemType", e.target.value)
                }
              >
                <option value=""></option>
                <option value="personal">Personal</option>
                <option value="office">Office</option>
                <option value="shopping">Shopping</option>
              </select>
            </label>
            <button
              //className="add-btn btn-floating"
              onClick={() => this.addItem()}
              disabled={!this.state.newItem.length}
            >
              <i class="material-icons"> + </i>
            </button>
            <br /> <br />
          </div>

          <p>Select group</p>
          <label>
            <select
              name="showgroup"
              value={this.state.showGroup}
              onChange={(e) => this.updateInput("showGroup", e.target.value)}
            >
              <option value=""></option>
              <option value="personal">Personal</option>
              <option value="office">Office</option>
              <option value="shopping">Shopping</option>
            </select>
          </label>
          <button
            className="add-btn btn-floating"
            onClick={(e) => {}}
            disabled={!this.state.showGroup}
          >
            <i class="material-icons">-</i>
          </button>
        </div>
        <Appx
          list={this.state.list}
          list1={this.state.list1}
          list2={this.state.list2}
          list3={this.state.list3}
          newItem={this.state.newItem}
          newItemType={this.state.newItemType}
          showGroup={this.state.showGroup}
        />
      </>
    );
  }
}
export default App;
