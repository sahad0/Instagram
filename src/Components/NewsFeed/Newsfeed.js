import React, { useEffect, useState } from 'react'
import Story from '../../Components2/Story/Story';
import { List } from 'antd';
import SuggestionRender from '../../Components2/Suggestion/SuggestionRender';
import Post from '../../Components2/Post/Post';
import axios from "axios";
import PostAdd from '../../Components2/addPostComp/postAdd';

function Newsfeed() {


  const [stories, setStories] = useState([]);
  const [suggest, setSuggest] = useState([]);
  const [post, setPost] = useState([]);


  useEffect(() => {

    fetchStory();
    fetchSuggest();
    fetchPost();

  }, []);

  function loadSuggest() {
    fetchSuggest();
  }
  async function fetchStory() {
    const stry = await axios.get("https://sahad0.github.io/Instagram-Story/story.json");

    if (stry) {
      setStories(stry.data.story);
    }

  }

  async function fetchSuggest() {
    const sgst = await axios.get("https://sahad0.github.io/Instagram-Suggestions/suggest.json");

    if (sgst) {
      setSuggest(sgst.data.sgst);
    }

  }

  async function fetchPost() {
    const pst = await axios.get("https://sahad0.github.io/Instagram-post/post.json");

    if (pst) {
      setPost(pst.data.pst);
    }

  }


  return (
    <>
      <div className='container-fluid newsfeed' style={{ backgroundColor: "#FAFAFA", display: "flex", flexDirection: "row" }}>


        <div className='container posting'>
          <div className='row'>
            <div className='col-md-1'></div>
            <div className='col-md-10'>
              <section className='story-container'>
                <div className='card my-2 mx-1' >
                  <ul className='storylist' style={{ listStyle: "none", display: "flex", flexDirection: "row", overflowY: "auto" }}>
                    <Story stories={stories} setStories={setStories} />
                  </ul>
                </div>

                <Post post={post} setPost={setPost} />
              </section>
            </div>
          </div>
        </div>



        <div className='container suggesting'>
          <div className='card sgstcrd my-5' style={{ border: "none", backgroundColor: "#FAFAFA" }}>
            <div className='card' style={{ width: "40%", border: "none", backgroundColor: "#FAFAFA" }}>

              <PostAdd post={post} setPost={setPost} />


              <List.Item>
                <List.Item.Meta


                  description="Suggestions for you"
                />
                <div style={{ fontWeight: "bold", color: "black", fontSize: "12px", cursor: "pointer" }} onClick={loadSuggest}>Load More</div>
              </List.Item>
              <SuggestionRender suggest={suggest} setSuggest={setSuggest} />

            </div>
          </div>
        </div>
      </div>


    </>
  )
}
export default Newsfeed;