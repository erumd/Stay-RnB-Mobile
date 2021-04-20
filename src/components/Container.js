import React, { Component } from "react";
import NavTabs from "./NavTabs";
import Home from "./pages/home";
import Listing from "./pages/listing";
import Profile from "./pages/profile";
import Login from "./pages/login";

class Container extends Component {
  state = {
    currentPage: "Home"
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  renderPage = () => {
    if (this.state.currentPage === "Home") {
      return <Home />;
    } else if (this.state.currentPage === "Listing") {
      return <Listing />;
    } else if (this.state.currentPage === "Login") {
      return <Profile />;
    } else {
      return <Login />;
    }
  };

  render() {
    return (
      <div>
        <NavTabs
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />
        {this.renderPage()}
      </div>
    );
  }
}

export default Container;
