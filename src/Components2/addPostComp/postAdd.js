import React, { useEffect, useState } from 'react'
import { Avatar, List , Modal,Button,Input} from 'antd';  




export default function PostAdd({post,setPost}) {

    const [addPost,setAddpost] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [modal2Visible, setModal2Visible] = useState(false);
    const [imgUrl,setimgUrl] = useState("");
    const [comment,setComment] = useState("");

    useEffect(()=>{
        if(!modal2Visible){
            setAddpost(false);
        }
    },[modal2Visible])


    function PostPic(){
        if(addPost){
            setAddpost(false);
        }
        else{
            setAddpost(true);
            setModal2Visible(true);
        }
    }

    function viewProfile(){
      setModalVisible(true);
    }

     function handleChange(){
        var preview = document.getElementById('pic');
        var file    = document.getElementById('picInput').files[0];
        var reader  = new FileReader();
      
        reader.onloadend = function () {
          preview.src = reader.result;
          setimgUrl(reader.result);
        }
      
        if (file) {
            
          reader.readAsDataURL(file);
          
        } else {
          preview.src = "";
        }
        
    }

        async function submitPost(){
            const pst = {};
            if(imgUrl&& comment){
                 
                pst.id_=9
                pst.name="fifi______x";
                pst.source="./images/me.jpg";
                pst.source1=imgUrl;
                pst.likes=0;
                pst.liked=true;
                pst.saved=true;

            }

            const arr = [...post];
            arr.unshift(pst);
            
            setModal2Visible(false);
            setComment("");
            document.getElementById('picInput').value="";
            var preview = document.getElementById('pic');
            preview.src="";
             setTimeout(()=>{
                setPost(arr);
             },4000);
            

            
        }

    
      
      


  return (
    
    <div >
    
        <List.Item >
                    <List.Item.Meta 
                      avatar={<Avatar size={55} src="./images/me.jpg" />}
                      title={
                        <>
                       <div >
                      <a href="#" style={{fontWeight:"bold"}} onClick={viewProfile}>fifi________x</a>
                      {addPost?
                        <><svg style={{cursor:"pointer"}}   aria-label="New post" className="_ab6- mx-5 my-1" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M12.003 5.545l-.117.006-.112.02a1 1 0 00-.764.857l-.007.117V11H6.544l-.116.007a1 1 0 00-.877.876L5.545 12l.007.117a1 1 0 00.877.876l.116.007h4.457l.001 4.454.007.116a1 1 0 00.876.877l.117.007.117-.007a1 1 0 00.876-.877l.007-.116V13h4.452l.116-.007a1 1 0 00.877-.876l.007-.117-.007-.117a1 1 0 00-.877-.876L17.455 11h-4.453l.001-4.455-.007-.117a1 1 0 00-.876-.877zM8.552.999h6.896c2.754 0 4.285.579 5.664 1.912 1.255 1.297 1.838 2.758 1.885 5.302L23 8.55v6.898c0 2.755-.578 4.286-1.912 5.664-1.298 1.255-2.759 1.838-5.302 1.885l-.338.003H8.552c-2.754 0-4.285-.579-5.664-1.912-1.255-1.297-1.839-2.758-1.885-5.302L1 15.45V8.551c0-2.754.579-4.286 1.912-5.664C4.21 1.633 5.67 1.05 8.214 1.002L8.552 1z"></path></svg></>
                        :
                        <><svg style={{cursor:"pointer"}} onClick={PostPic}  aria-label="New post" className="_ab6- mx-5 my-1" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M2 12v3.45c0 2.849.698 4.005 1.606 4.944.94.909 2.098 1.608 4.946 1.608h6.896c2.848 0 4.006-.7 4.946-1.608C21.302 19.455 22 18.3 22 15.45V8.552c0-2.849-.698-4.006-1.606-4.945C19.454 2.7 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.547 2 5.703 2 8.552z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="6.545" x2="17.455" y1="12.001" y2="12.001"></line><line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" x1="12.003" x2="12.003" y1="6.545" y2="17.455"></line></svg></>}
                      </div> 
                      </>
                      
                    }
                      description="||$àhád||"
                      
                      
                    />           
                    <Modal
                     
                     onCancel={()=>{setModal2Visible(false)}}
                    
                    visible={modal2Visible}
                    footer={[
                        
                        
                        <Button key="submit" type="primary"  onClick={submitPost}>
                          Post
                        </Button>,
                    ]}
                >
                    <label className="mt-3 ">
                       
                        <Input className='my-3' placeholder="Caption" onChange={(e)=>{setComment(e.target.value)}} value={comment} />
                        <input id="picInput" onChange={handleChange} type="file" accept="images/*" />
                        <img id="pic" src="" alt="img" className='img-fluid' />
                    </label>
                </Modal>  

                <Modal
                     
                     onCancel={()=>{setModalVisible(false)}}
                    
                    visible={modalVisible}
                    footer={null}
                >
                  <div className='container'>
                    <div className='row'>
                      <div className='col-md-6'>
                      <Avatar size={200} src="./images/me.jpg" />
                      </div>
                      <div className='col-md-6'>
                        <span style={{fontWeight:"bold"}}>fifi________x</span>
                        <div><span>Music and CHill! </span></div>
                        <div className='my-4'>
                            <div><p className='my-3 mx-4' style={{color:"#0000FFF"}}>Followers <span style={{color:"black"}}>: 150</span></p></div>
                            <div><p className='mx-4' style={{color:"#0000FFF"}}>Following <span style={{color:"black"}}>: 200</span></p></div>
                        </div>
                        <div>
                          <Button className='mx-4' type='primary'>View Profile</Button>
                        </div>
                        
                      </div>
                    </div>
                  </div>
                </Modal>  
        </List.Item>

                  
    </div>      
    
  )
}
