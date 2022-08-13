import { Input } from 'antd';
import React, { useState } from 'react';
import { Avatar } from 'antd';
import Icons from '../../Components2/NavIcons/Icons';


function Navbar() {
  
  const [home,setHome] = useState(true);
  const [message,setMessage] = useState(false);
  const [post,setPost] = useState(false);
  const [people,setPeople] = useState(false);
  const [activity,setActivity] = useState(false);


  const Home = ()=>{
      setHome(true);
      setMessage(false);
      setPost(false);
      setPeople(false);
      setActivity(false);
  }
  const Message = ()=>{
      setHome(false);
      setMessage(true);
      setPost(false);
      setPeople(false);
      setActivity(false);
  }

  const Post = ()=>{
    setHome(false);
    setMessage(false);
    setPost(true);
    setPeople(false);
    setActivity(false);
  }
  const People = ()=>{
    setHome(false);
    setMessage(false);
    setPost(false);
    setPeople(true);
    setActivity(false);
  }
  const Activity = ()=>{
    setHome(false);
    setMessage(false);
    setPost(false);
    setPeople(false);
    setActivity(true);
  }



  return (
    <>
      <nav className="navbar sticky-top navbar-expand-lg " style={{ boxShadow: "0 4px 4px -6px #222",backgroundColor:"white" }}>
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
          <div className="col-md-5">
            
            <Icons home={home} Home={Home} message={message} Message={Message} post={post} Post={Post} people={people} People={People} activity={activity} Activity={Activity} />

            <Avatar className='mx-2' size={25} src="./images/me.jpg" />


          
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
