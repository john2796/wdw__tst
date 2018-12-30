import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    items: [],
    currentItems: {
      name: "",
      id: Date.now(),
    },

  }


  handleChange = (name, e) => {
    let currentItems = { ...this.state.currentItems }
    currentItems[name] = e.target.value
    this.setState({
      currentItems
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const newItem = this.state.currentItems
    const items = [newItem, ...this.state.items]

    this.setState({
      items,
      currentItems: {
        name: '',
        id: Date.now()
      }
    })
  }



  render() {
    const { items } = this.state
    console.log(items)
    return (
      <div className="App">
        <h1>testing Redux</h1>
        <p>add Todo</p>
        <form
          onSubmit={this.handleSubmit}
        >
          <input
            type="text"
            placeholder="add your todos here"
            onChange={this.handleChange.bind(this, "name")}
            name="name"
            value={this.state.currentItems.name}
          />
          <button
            type="submit"
          >submit</button>
        </form>
      </div>
    );
  }
}
export default App;
