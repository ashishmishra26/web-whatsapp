import React, { Component } from 'react'
import Header from './Header';
import SearchBox from './SearchBox';
import Contact from './Contact';

export default class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
      searchText: ''
    }
  }
  render() {
    let {allContact, contactedContact, changeReciever, currentUser, reciever} = this.props,
    {searchText} = this.state;
    return (
      <div className="sidebar">
        <Header class="left-header" currentUser={currentUser} reciever={reciever}/>
        <SearchBox searchText={searchText} handleSearchText={this.handleSearchText} isActive={this.state.isActive} handleActive={this.handleActive}/>
        <Contact allContact={allContact} contactedContact={contactedContact} searchText={searchText} changeReciever={changeReciever} isActive={this.state.isActive} handleActive={this.handleActive}/>
      </div>
    )
  }
  handleSearchText = (value) => {
    this.setState({searchText: value})
  }

  handleActive = (value) => {
    this.setState({isActive: value});
  }
}
