import React from 'react'
import { Avatar } from 'antd'
export default function Post({post}) {
    if(post){
        return post.map((posts, index) => {
           return (
            <>
                 <div key={index} className='card my-3 mx-1' >
                          <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
                            <div>
                              <Avatar size={38} className='my-3 mx-2'  src={posts.source} />
                              <span style={{cursor:"pointer"}}>{posts.name}</span>
                            </div>
                            <svg className='m-2' style={{cursor:"pointer",marginTop:"20px",marginRight:"10px"}} aria-label="More Options"  color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><circle cx="12" cy="12" r="1.5"></circle><circle cx="6" cy="12" r="1.5"></circle><circle cx="18" cy="12" r="1.5"></circle></svg>
                          </div>
                          
                          <div className='card-header' style=
                          {{backgroundImage:"url("+posts.source1+")",
                            backgroundSize:"cover",
                            backgroundRepeat:"no-repeat",
                            height:"500px",
                            backgroundPosition:"center center"}}
                          ></div>
                          <div className='card-body'>

                            <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
                              <div>
                              <svg style={{marginLeft:"5px"}} aria-label="Like" className="_ab6-" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z"></path></svg>
                              <svg style={{marginLeft:"5px"}} aria-label="Comment" className="_ab6-" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M20.656 17.008a9.993 9.993 0 10-3.59 3.615L22 22z" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></path></svg>
                              <svg style={{marginLeft:"5px"}} aria-label="Share Post" className="_ab6-" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><line fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2" x1="22" x2="9.218" y1="3" y2="10.083"></line><polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></polygon></svg>

                              </div>
                              <div>
                              <svg aria-label="Save" className="_ab6-" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></polygon></svg>
                              </div>

                            </div>

                            <div className='my-1 mx-1' style={{fontWeight:"bold"}}> {posts.likes} likes </div>
                            <div style={{display:"flex", flexDirection:"row"}}>
                              <div className='my-1 mx-1' style={{fontWeight:"bold"}}>fifi________x</div>
                              <small className='my-2 mx-2'>Hello World!</small>
                            </div>
                            <div style={{color:"gray"}}>View all Comments</div>
                            <div style={{color:"gray",marginTop:"10px"}}>a moment ago</div>
                          </div>
                          <div className='card-footer' style={{backgroundColor:"white"}}>
                            <div style={{display:"flex",flexDirection:"row"}}>
                            <svg aria-label="Emoji" className="_ab6- my-2" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M15.83 10.997a1.167 1.167 0 101.167 1.167 1.167 1.167 0 00-1.167-1.167zm-6.5 1.167a1.167 1.167 0 10-1.166 1.167 1.167 1.167 0 001.166-1.167zm5.163 3.24a3.406 3.406 0 01-4.982.007 1 1 0 10-1.557 1.256 5.397 5.397 0 008.09 0 1 1 0 00-1.55-1.263zM12 .503a11.5 11.5 0 1011.5 11.5A11.513 11.513 0 0012 .503zm0 21a9.5 9.5 0 119.5-9.5 9.51 9.51 0 01-9.5 9.5z"></path></svg>
                            <input className='form-control search1'style={{fontSize:"14px"}} placeholder='Add a comment...'></input>
                            <div className='my-2 mx-3' style={{color:"#1D95F6"}}>Post</div>
                            </div>
                          </div>
                        </div>
            </>
           
           
           )
           
       
       })
   }
   else{
       return <>Hello</>
   }
 
}
