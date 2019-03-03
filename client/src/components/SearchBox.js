import React, { Component } from 'react'

export default class SearchBox extends Component {
  render() {
    let { isActive } = this.props;
    return (
      <div className={isActive ? 'sidebar-search-active' : 'sidebar-search'}>
        <div className='sidebar-search-inner' onClick={()=>{this.handleClick(!isActive)}}>
            <span><i className={isActive ? 'fa fa-arrow-left blue search-icon': 'fa fa-search search-icon'}></i></span>
            <input id="sidebar-search-box" type="text" placeholder="Search or start new chat" value={this.props.searchText} onChange={(e)=>{this.handleSearchText(e)}}></input>
        </div>
      </div>
    )
  }
  /**
   * click handler for search box
   */
  handleClick = (value) => {
    this.props.handleActive(value);
    if (!value) {
      this.props.handleSearchText('');
    }
  }
  /**
   * handler for search text
   */
  handleSearchText = (e) => {
    this.props.handleSearchText(e.target.value);
  }
}
