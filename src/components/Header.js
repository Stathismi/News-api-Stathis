/* eslint-disable */
import React, { Component } from 'react';
import "../styles/Header.scss";

class Header extends Component {
  constructor(props){
    super(props);
    this.getUserInitials = this.getUserInitials.bind(this);

    this.state = {
      isOpen: false,
      user: {
        firstName: "Efstathios",
        lastName: "Mitskas"
      }
    }
  }

  toggleOpen = () => this.setState({ isOpen: !this.state.isOpen });


  getUserInitials(){
    const { user } = this.state;
    var initials = ""
    try {
      initials = user.firstName.substring(0, 1) + user.lastName.substring(0, 1);
    } catch (e) {
      console.log("name and surname are empty")
    }

    return initials

  }

  render() {
    const { className, styles } = this.props;
    const menuClass = `dropdown-menu${this.state.isOpen ? " show" : ""}`;

    return (
      <div className="header-wrapper">

         <div className=" col-sm-12 header-top">
          <div className="user-thumbnail-greeting-wrapper">
            <div className="user-thumbnail">
              {this.getUserInitials()}
            </div>
            <div className="dropdown" onClick={this.toggleOpen}>
              <button className="btn  news-dropbtn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <p >
                 Hi {this.state.user.firstName}
                 </p>
              </button>
              <div className={menuClass} aria-labelledby="dropdownMenuButton">
                <a className="dropdown-item" href="#nogo">
                  Settings
                </a>
                <a className="dropdown-item" href="#nogo">
                  Logout
                </a>
              </div>
            </div>

          </div>


         </div>
         <div className="row cover">
          <img className="col-sm-12 " src={"images/cover.jpg"} alt="cover" />
         </div>
         <div className="row profilePic">
          <img className="col-sm-1 " src={"images/stathis.jpg"} alt="My Profile" />
         </div>

      </div>
    );
  }
}

export default Header;
//
// <div class="dropdown">
//    <button class="btn  news-dropbtn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//        <div className="greetings">
//         <p className="align-middle">
//           Hi stathis
//         </p>
//        </div>
//    </button>
//  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
//    <a class="dropdown-item" href="#">Action</a>
//    <a class="dropdown-item" href="#">Another action</a>
//    <a class="dropdown-item" href="#">Something else here</a>
//  </div>
// </div>
