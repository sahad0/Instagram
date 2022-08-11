import { Input } from 'antd';
import React from 'react';


function Navbar() {
  






  return (
    <>
      <nav className="navbar fixed-top navbar-expand-lg " style={{ boxShadow: "0 4px 4px -6px #222" }}>
        <div className="container-fluid">
          <div className="col-md-5">
            <div className="row">
              <div className="col-md-7"></div>
              <div className="col-md-5">
                <a className="navbar-brand" href="/login">
                  <img src="./images/insta.png" draggable="false" alt="insta" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-2 searchbar" >
          <Input className='search' style={{backgroundColor:" background-color: #efefef !important"}} placeholder="Search"  allowClear  />
          </div>
          <div className="col-md-5">s</div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
