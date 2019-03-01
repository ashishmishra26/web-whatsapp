import React, { Component } from 'react'
import Header from './Header';
import SearchBox from './SearchBox';
import Contact from './Contact';

export default class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: ''
    }
  }
  render() {
    let {allContact, contactedContact, changeReciever} = this.props,
    {searchText} = this.state;
    return (
      <div className="sidebar">
        <Header class="left-header"/>
        <SearchBox searchText={searchText} handleSearchText={this.handleSearchText}/>
        <Contact allContact={allContact} contactedContact={contactedContact} searchText={searchText} changeReciever={changeReciever}/>
      </div>
    )
  }
  handleSearchText = (value) => {
    this.setState({searchText: value})
  }
}
