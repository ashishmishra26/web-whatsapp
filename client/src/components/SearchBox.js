import React, { Component } from 'react'

export default class SearchBox extends Component {
  render() {
    return (
      <div className='sidebar-search'>
        <input id="sidebar-search-box" type="text" title="Search or start new chat"></input>
      </div>
    )
  }
}
