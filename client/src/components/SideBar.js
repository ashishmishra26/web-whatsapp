import React, { Component } from 'react'
import Header from './Header';
import SearchBox from './SearchBox';

export default class SideBar extends Component {
  render() {
    return (
      <div className="sidebar">
        <Header class="left-header"/>
        <SearchBox />
      </div>
    )
  }
}
