import React from 'react'
import { Avatar, Popover, Space, notification } from 'antd';
export default function Post({ post, setPost }) {


  const content = (_id) => {
    return (<>
      <div style={{ width: "150px", overflow: "auto", cursor: "pointer" }} onClick={() => { deletePost(_id) }} onMouseOver={(e) => { e.target.style.background = "#FAFAFA" }} onMouseOut={(e) => { e.target.style.background = "#FFF" }} >
        <svg style={{ width: "18px", height: "18px" }} className="icon-trashcan ct-delete trashcan" x="0px" y="0px" viewBox="0 0 25 24.8" xmlSpace="preserve" data-ember-action data-ember-action-1015={1015}>
          <g className="trashcan-open">
            <path d="M18.7,24.4H5.9L4.9,7h14.9L18.7,24.4z M7.6,22.6H17l0.8-13.7h-11L7.6,22.6z" />
            <polygon points="13.6,10.3 13.1,21.2 14.9,21.2 15.4,10.3 " />
            <polygon points="11.5,21.2 11,10.3 9.2,10.3 9.7,21.2 " />
            <path d="M19.1,0.7l-4.7,0.9l-0.8-1.4L8.2,1.3L8,3l-4.7,1l0.2,4.7l17.3-3.5L19.1,0.7z 
            
            M8.8,1.9l4.4 -1.0 l0.5,0.8
            L8.7,2.8z 
            
            M5.2,6.4l0-1L18,2.8l0.3,0.9L5.2,6.4z" />
          </g>
          <g className="trashcan-closed">
            <path d="M6.8,8.8h11L17,22.6
            H7.6L6.8,8.8z 
            M4.9,7l1,17.4h12.8
            l1-17.4
            H4.9z" />
            <polygon points="13.6,10.3 13.1,21.2 14.9,21.2 15.4,10.3 " />
            <polygon points="11.5,21.2 11,10.3 9.2,10.3 9.7,21.2 " />
            <path d="M20.4,4h-4.8l-0.5-1.6
            H9.5L9,4
            H4.2
            L3.5,8.6h17.6
            L20.4,4z 
            
            M9.9,3.2h4.8
            L14.9,3.9h-5.2z
            
            M5.6,6.7l0.2-1 h13l0.2,1
            H5.6z" />
          </g>
        </svg>

        Delete
      </div>

    </>);
  }

  const openNotification = (placement) => {
    notification.success({
      message: `Post Saved !`,
      placement,
    });
  };
  const closeNotification = (placement) => {
    notification.error({
      message: `Post Removed !`,
      placement,
    });
  };


  function deletePost(id_) {
    const change = [...post];
    const update = change.filter((p) => {
      return p.id_ !== id_;
    });
    setPost(update);
  }


  function likee(_id) {
    const change = [...post];
    const update = change.filter((p) => {
      if (p.id_ === _id) {
        if (p.liked) {
          p.liked = false;
          p.likes = parseInt(p.likes) + 1;
        }
        else {
          p.liked = true;
          p.likes = parseInt(p.likes) - 1;
        }
      }
      return p;
    });
    setPost(update);
  }

  function save(_id) {
    const change = [...post];
    const update = change.filter((p) => {
      if (p.id_ === _id) {
        if (p.saved) {
          p.saved = false;
          openNotification('top');
        }
        else {
          p.saved = true;
          closeNotification('top');
        }
      }
      return p;
    });
    setPost(update);
  }



  if (post) {
    return (post.map((posts, index) => {

      const avimg = require(`../../images/${posts.source}`);

      let imag;
      if (posts.source1.startsWith("data:")) {

        imag = posts.source1;
      }
      else {
        imag = require(`../../images/${posts.source1}`);

      }



      return (


        <div key={index} className='card my-3 mx-1' onDoubleClick={() => { likee(posts.id_) }}>
          <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
            <div>
              <Avatar size={38} className='my-3 mx-2' src={avimg} />
              <span style={{ cursor: "pointer" }}>{posts.name}</span>
            </div>
            <Popover placement='bottomRight' content={content(posts.id_)} trigger="hover">
              <svg className='m-2' style={{ cursor: "pointer", marginTop: "20px", marginRight: "10px" }} aria-label="More Options" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><circle cx="12" cy="12" r="1.5"></circle><circle cx="6" cy="12" r="1.5"></circle><circle cx="18" cy="12" r="1.5"></circle></svg>
            </Popover>
          </div>

          <div className='card-header' style=
            {{
              backgroundImage: "url(" + imag + ")",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              height: "500px",
              backgroundPosition: "center center"
            }}
          ></div>
          <div className='card-body'>

            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
              <div>
                {posts.liked ?
                  <><svg style={{ marginLeft: "5px" }} onClick={() => { likee(posts.id_) }} aria-label="Like" className="_ab6-" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M16.792 3.904A4.989 4.989 0 0121.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 014.708-5.218 4.21 4.21 0 013.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 013.679-1.938m0-2a6.04 6.04 0 00-4.797 2.127 6.052 6.052 0 00-4.787-2.127A6.985 6.985 0 00.5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 003.518 3.018 2 2 0 002.174 0 45.263 45.263 0 003.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 00-6.708-7.218z"></path></svg></>

                  :
                  <><svg style={{ marginLeft: "5px" }} onClick={() => { likee(posts.id_) }} aria-label="Unlike" className="_ab6-" color="#ed4956" fill="#ed4956" height="24" role="img" viewBox="0 0 48 48" width="24"><path d="M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path></svg></>
                }




                <svg style={{ marginLeft: "5px" }} aria-label="Comment" className="_ab6-" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M20.656 17.008a9.993 9.993 0 10-3.59 3.615L22 22z" fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></path></svg>
                <svg style={{ marginLeft: "5px" }} aria-label="Share Post" className="_ab6-" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><line fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="2" x1="22" x2="9.218" y1="3" y2="10.083"></line><polygon fill="none" points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334" stroke="currentColor" strokeLinejoin="round" strokeWidth="2"></polygon></svg>

              </div>
              <div>
                <Space>
                  {posts.saved ?
                    <><svg onClick={() => save(posts.id_)} aria-label="Save" className="_ab6-" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></polygon></svg></>

                    :
                    <><svg onClick={() => save(posts.id_)} aria-label="Remove" className="_ab6-" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M20 22a.999.999 0 01-.687-.273L12 14.815l-7.313 6.912A1 1 0 013 21V3a1 1 0 011-1h16a1 1 0 011 1v18a1 1 0 01-1 1z"></path></svg></>

                  }


                </Space>
              </div>

            </div>

            <div className='my-1 mx-1' style={{ fontWeight: "bold" }}> {posts.likes} likes </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div className='my-1 mx-1' style={{ fontWeight: "bold" }}>fifi________x</div>
              <small className='my-2 mx-2'>Hello World!</small>
            </div>
            <div style={{ color: "gray" }}>View all Comments</div>
            <div style={{ color: "gray", marginTop: "10px" }}>a moment ago</div>
          </div>
          <div className='card-footer' style={{ backgroundColor: "white" }}>
            <div style={{ display: "flex", flexDirection: "row" }}>


              <svg aria-label="Emoji" className="_ab6- my-2" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M15.83 10.997a1.167 1.167 0 101.167 1.167 1.167 1.167 0 00-1.167-1.167zm-6.5 1.167a1.167 1.167 0 10-1.166 1.167 1.167 1.167 0 001.166-1.167zm5.163 3.24a3.406 3.406 0 01-4.982.007 1 1 0 10-1.557 1.256 5.397 5.397 0 008.09 0 1 1 0 00-1.55-1.263zM12 .503a11.5 11.5 0 1011.5 11.5A11.513 11.513 0 0012 .503zm0 21a9.5 9.5 0 119.5-9.5 9.51 9.51 0 01-9.5 9.5z"></path></svg>


              <input className='form-control search1' style={{ fontSize: "14px" }} placeholder='Add a comment...'></input>
              <div className='my-2 mx-3' style={{ color: "#1D95F6" }}>Post</div>
            </div>
          </div>
        </div>



      )


    })
    )
  }
  else {
    return <>Hello</>
  }

}
