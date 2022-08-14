import { Input } from 'antd';
import React, { useState } from 'react';
import { Avatar } from 'antd';
import Icons from '../../Components2/NavIcons/Icons';
import {  Popover } from 'antd';

function Navbar() {
  
  const [home,setHome] = useState(true);
  const [message,setMessage] = useState(false);
  const [post,setPost] = useState(false);
  const [people,setPeople] = useState(false);
  const [activity,setActivity] = useState(false);

  function checkTrue(){
    setHome(true);
    setMessage(false);
    setPost(false);
    setPeople(false);
    setActivity(false);

  }
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

  const Profile = ()=>{
    setHome(false);
    setMessage(false);
    setPost(false);
    setPeople(false);
    setActivity(false);
  }

 


  const content1 = (
    <div style={{width:"300px"}}>
      <p onMouseOver={(e)=>{e.target.style.background="#FAFAFA"}  }  onMouseLeave={(e)=>{e.target.style.background="#FFF"}  }  >
        
        <svg aria-label="Profile" className="_ab6- mx-2" color="#262626" fill="#262626" height="16" role="img" viewBox="0 0 24 24" width="16"><circle cx="12.004" cy="12.004" fill="none" r="10.5" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2"></circle><path d="M18.793 20.014a6.08 6.08 0 00-1.778-2.447 3.991 3.991 0 00-2.386-.791H9.38a3.994 3.994 0 00-2.386.791 6.09 6.09 0 00-1.779 2.447" fill="none" stroke="currentColor" strokeLinecap="round" strokemiterlimit="10" strokewidth="2"></path><circle cx="12.006" cy="9.718" fill="none" r="4.109" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2"></circle></svg>
        <span style={{marginTop:"5px !important"}}>Content</span>


      </p>
       <p onMouseOver={(e)=>{e.target.style.background="#FAFAFA"}  }  onMouseLeave={(e)=>{e.target.style.background="#FFF"}  }  >
        
       <svg aria-label="Saved" className="_ab6- mx-2" color="#262626" fill="#262626" height="16" role="img" viewBox="0 0 24 24" width="16"><polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polygon></svg>
        <span style={{marginTop:"5px !important"}}>Saved</span>

        
      </p>
      <p onMouseOver={(e)=>{e.target.style.background="#FAFAFA"}  }  onMouseLeave={(e)=>{e.target.style.background="#FFF"}  }  >
        
      <svg aria-label="Settings" className="_ab6- mx-2" color="#262626" fill="#262626" height="16" role="img" viewBox="0 0 24 24" width="16"><circle cx="12" cy="12" fill="none" r="8.635" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></circle><path d="M14.232 3.656a1.269 1.269 0 01-.796-.66L12.93 2h-1.86l-.505.996a1.269 1.269 0 01-.796.66m-.001 16.688a1.269 1.269 0 01.796.66l.505.996h1.862l.505-.996a1.269 1.269 0 01.796-.66M3.656 9.768a1.269 1.269 0 01-.66.796L2 11.07v1.862l.996.505a1.269 1.269 0 01.66.796m16.688-.001a1.269 1.269 0 01.66-.796L22 12.93v-1.86l-.996-.505a1.269 1.269 0 01-.66-.796M7.678 4.522a1.269 1.269 0 01-1.03.096l-1.06-.348L4.27 5.587l.348 1.062a1.269 1.269 0 01-.096 1.03m11.8 11.799a1.269 1.269 0 011.03-.096l1.06.348 1.318-1.317-.348-1.062a1.269 1.269 0 01.096-1.03m-14.956.001a1.269 1.269 0 01.096 1.03l-.348 1.06 1.317 1.318 1.062-.348a1.269 1.269 0 011.03.096m11.799-11.8a1.269 1.269 0 01-.096-1.03l.348-1.06-1.317-1.318-1.062.348a1.269 1.269 0 01-1.03-.096" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></path></svg>
        <span style={{marginTop:"5px !important"}}>Settings</span>

        
      </p>
      
      <p onMouseOver={(e)=>{e.target.style.background="#FAFAFA"}  }  onMouseLeave={(e)=>{e.target.style.background="#FFF"}  }   className='m-3' style={{borderTop:"1px solid gray"}}>Log Out</p>
    </div>
  
  );


  return (
    <>
      <nav className="navbar sticky-top navbar-expand-lg " style={{ boxShadow: "0 4px 4px -6px #222",backgroundColor:"white",zIndex:"1" }}>
        <div className="container-fluid" style={{display:"flex",flexDirection:"row"}}>
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
            
            <Icons home={home} checkTrue={checkTrue}  Home={Home} message={message} Message={Message} post={post} Post={Post} people={people} People={People} activity={activity} Activity={Activity} />
            <Popover content={content1} trigger="click" placement='bottomRight' >    
               <Avatar className='mx-2' style={{cursor:"pointer"}} onClick={Profile} size={25} src="./images/me.jpg" />
            </Popover>



          
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
