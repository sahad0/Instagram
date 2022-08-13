import React, { useEffect, useState } from 'react'
import Story from '../../Components2/Story/Story';
import { Avatar, List } from 'antd';
import SuggestionRender from '../../Components2/Suggestion/SuggestionRender';
import Post from '../../Components2/Post/Post';

function Newsfeed() {


    const [stories,setStories] = useState([]);
    const [suggest,setSuggest] = useState([]);
    const [post,setPost] = useState([]);

    useEffect(()=>{
      var strs = [ 
        {"id":1,"name":"fifi______x","source":"./images/me.jpg"},
        {"id":2,"name":"ErenYeagar","source":"./images/1.jpg"},
        {"id":3,"name":"Naruto","source":"./images/2.jpg"},
        {"id":4,"name":"Hinataa","source":"./images/3.png"},
        {"id":5,"name":"GojoGag","source":"./images/4.jpg"},
        {"id":6,"name":"ENo_NoW","source":"./images/5.jpg"},
        {"id":7,"name":"JOkerJk","source":"./images/6.jpg"},
        {"id":8,"name":"THeLast","source":"./images/7.jpg"},
        {"id":9,"name":"MikeTys_","source":"./images/8.jpg"},
        {"id":10,"name":"Willy","source":"./images/9.jpg"},
      ];

      const sgst = [
        {"name":"ENo_NoW","source":"./images/5.jpg"},
        {"name":"JOkerJk","source":"./images/6.jpg"},
        {"name":"THeLast","source":"./images/7.jpg"},
        {"name":"MikeTys_","source":"./images/8.jpg"},
        
      ];

      var pst = [ 
        {"id":1,"name":"fifi______x","source":"./images/me.jpg","source1":"./images/anim1.jpg",},
        {"id":2,"name":"ErenYeagar","source":"./images/1.jpg","source1":"./images/anim3.jpg",},
        {"id":3,"name":"Naruto","source":"./images/2.jpg","source1":"./images/anim4.jpg",},
        {"id":4,"name":"Hinataa","source":"./images/3.png","source1":"./images/anim5.jpg",},
        {"id":5,"name":"GojoGag","source":"./images/4.jpg","source1":"./images/anim2.jpg",},
    
      ];
      setPost(pst);
      setSuggest(sgst);
      setStories(strs);
    },[]);



  return (
    <>
    <div className='container-fluid'style={{backgroundColor:"#FAFAFA"}}>
        <div className='row'>
            <div className='col-md-3'> </div>
            <div className='col-md-4'>
                <div className='row'>
                    <div className='col-md-1'></div>
                    <div className='col-md-10'>
                    <section className='story-container'>
                        <div className='card my-2 mx-1' >
                          <ul className='storylist' style={{listStyle:"none",display:"flex",flexDirection:"row",overflowY:"auto"}}>
                              <Story stories={stories} />
                            </ul>
                        </div>

                        <Post post={post}/>
                    </section>
                    </div>
                </div>
            </div>
            <div className='col-md-5 my-3'>
                <div className='card sgstcrd' style={{border:"none",backgroundColor:"#FAFAFA"}}>
                  <div className='card' style={{width:"40%",border:"none",backgroundColor:"#FAFAFA"}}>
                  <List.Item>
                    <List.Item.Meta
                      avatar={<Avatar size={55} src="./images/me.jpg" />}
                      title={<a href="https://ant.design" style={{fontWeight:"bold"}}>fifi________x</a>}
                      description="||$àhád||"
                    />
                     <div style={{fontWeight:"bold",color:"#3AA1F6",fontSize:"12px",cursor:"pointer"}}>Switch</div>
                  </List.Item>
                  <List.Item>
                    <List.Item.Meta
                      
                      
                      description="Suggestions for you"
                    />
                     <div style={{fontWeight:"bold",color:"black",fontSize:"12px",cursor:"pointer"}}>See All</div>
                  </List.Item>
                  <SuggestionRender suggest={suggest} />
                  
                  </div>
                </div>
            </div>
        </div>
    </div>
        
    </>
  )
}
export default Newsfeed;