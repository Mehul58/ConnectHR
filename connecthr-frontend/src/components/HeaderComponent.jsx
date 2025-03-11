import React, { Component } from "react";
const HeaderComponent = () => {
  return (
    // <div>
    //     <header>
    //         <nav className = ""></nav>
    //     </header>
    // </div>
    <div className="container-fluid">
      <header>
        <nav className="navbar bg-body-tertiary">
          <a className="navbar-brand" href="#">
            {/* <img
              src="/docs/5.3/assets/brand/bootstrap-logo.svg"
              alt="Logo"
              width="30"
              height="24"
              class="d-inline-block align-text-top"
            /> */}
            Bootstrap
          </a>
        </nav>
      </header>
    </div>
  );
};

export default HeaderComponent;
