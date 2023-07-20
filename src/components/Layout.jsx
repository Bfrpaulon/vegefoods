import React, { Component } from "react";
import Navbar from "./NavBar";
import NavFooter from "./NavFooter";

class Layout extends Component {
  render() {
    return (
      <div>
        <header>
          <Navbar />
        </header>
        <main>{this.props.children}</main>
        <footer>
            <NavFooter />
        </footer>
      </div>
    );
  }
}

export default Layout;
