import React, { Component } from 'react'

export default class SearchBox extends Component {
  constructor (props) {
    super(props);
    this.state = {
        isActive: false      
    }
  }
  render() {
    let isActive = this.state.isActive;
    return (
      <div className={isActive ? 'sidebar-search-active' : 'sidebar-search'}>
        <div className='sidebar-search-inner' onClick={()=>{this.handleClick(!isActive)}} onBlur={()=>{this.handleClick(false)}}>
            <span><i className={isActive ? 'fa fa-arrow-left blue search-icon': 'fa fa-search search-icon'}></i></span>
            <input id="sidebar-search-box" type="text" placeholder="Search or start new chat" onChange={(e)=>{this.handleSearchText(e)}}></input>
        </div>
      </div>
    )
  }
  handleClick = (value) => {
    this.setState({isActive: value});
  }
  handleSearchText = (e) => {
    this.props.handleSearchText(e.target.value);
  }
}
