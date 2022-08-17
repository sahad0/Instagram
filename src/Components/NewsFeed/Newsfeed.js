import React, { useEffect, useState } from 'react'
import Story from '../../Components2/Story/Story';
import {  List } from 'antd';
import SuggestionRender from '../../Components2/Suggestion/SuggestionRender';
import Post from '../../Components2/Post/Post';
import axios from "axios";
import PostAdd from '../../Components2/addPostComp/postAdd';

function Newsfeed() {


    const [stories,setStories] = useState([]);
    const [suggest,setSuggest] = useState([]);
    const [post,setPost] = useState([]);
    

    useEffect(()=>{
      
      fetchStory();
      fetchSuggest();
      fetchPost();
      
    },[]);

    function loadSuggest(){
      fetchSuggest();
    }
    async function fetchStory(){
      const stry = await axios.get("http://localhost:8000/story");
     
      if(stry){
        setStories(stry.data);
      }
      
    }

    async function fetchSuggest(){
      const sgst = await axios.get("http://localhost:8002/sgst");
     
      if(sgst){
        setSuggest(sgst.data);
      }
      
    }

    async function fetchPost(){
      const pst = await axios.get("http://localhost:8001/pst");
     
      if(pst){
        setPost(pst.data);
      }
      
    }


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
                              <Story stories={stories} setStories={setStories} />
                            </ul>
                        </div>

                        <Post post={post} setPost={setPost}/>
                    </section>
                    </div>
                </div>
            </div>
            <div className='col-md-5 my-3'>
                <div className='card sgstcrd' style={{border:"none",backgroundColor:"#FAFAFA"}}>
                  <div className='card' style={{width:"40%",border:"none",backgroundColor:"#FAFAFA"}}>
                  
                  <PostAdd post={post} setPost={setPost} />


                  <List.Item>
                    <List.Item.Meta
                      
                      
                      description="Suggestions for you"
                    />
                     <div style={{fontWeight:"bold",color:"black",fontSize:"12px",cursor:"pointer"}} onClick={loadSuggest}>Load More</div>
                  </List.Item>
                  <SuggestionRender suggest={suggest} setSuggest={setSuggest} />
                  
                  </div>
                </div>
            </div>
        </div>
    </div>
        
    </>
  )
}
export default Newsfeed;