import React, { Component } from 'react'
import Header from './Header';
import SearchBox from './SearchBox';
import Contact from './Contact';

export default class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false, //state to store the information if the search is being made or not
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
        <Contact allContact={allContact} contactedContact={contactedContact} searchText={searchText} reciever={reciever} changeReciever={changeReciever} isActive={this.state.isActive} handleActive={this.handleActive}/>
      </div>
    )
  }
  /**
   * method to set search text state
   */
  handleSearchText = (value) => {
    this.setState({searchText: value})
  }
  /**
   * method to set isActive state
   */
  handleActive = (value) => {
    this.setState({isActive: value});
  }
}
