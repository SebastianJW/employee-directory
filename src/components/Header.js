import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <h1>Employee Directory</h1>
        <p>Search for employee or click to sort by name, email, etc.</p>
      </div>
    )
  }
}