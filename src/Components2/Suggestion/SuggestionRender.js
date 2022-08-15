import React, { useState } from 'react'
import { Avatar, List,Modal,Button } from 'antd';
export default function SuggestionRender({suggest,setSuggest}) {
    const [modalVisible, setModalVisible] = useState(false);
    const [name,setName] = useState("");
    const [followers,setFollowers] = useState(100);
    const [avatar,setAvatar] = useState("");
    const [follow,setFollow] = useState(false);

    function removeSuggestion(id_){
        let carray = [...suggest];
        const updated = carray.filter((p)=>{
            return p.id_!==id_;
           
        });
        setSuggest(updated);
    }


    function ProfileView(name,imagee){
        setName(name);
        setAvatar(imagee);
        setModalVisible(true);
    }

    function DoFollow(){
        if(follow){
            setFollow(false);
            const val = followers+1;
            setFollowers(val);
        }
        else{
            setFollow(true);
            const val = followers-1;
            setFollowers(val);
        }
    }


    if(suggest.length>0){
        return suggest.map((item,index)=>{
            
           return (
            
            
            <div  key={index} style={{height:"20%",backgroundColor:"#FAFAFA"}} >
            <List.Item >
                   <List.Item.Meta
                     avatar={<Avatar  src={item.source} />}
                     title={<a href="#" onClick={()=>{ProfileView(item.name,item.source)}} style={{fontWeight:"bold",fontSize:"13px"}}>{item.name}</a>}
                     description={<small style={{marginBottom:"25px !important"}}>New to Instagram</small>}
                   />
                    <div style={{fontWeight:"bold",color:"#3AA1F6",fontSize:"12px",cursor:"pointer"}}><button onClick={()=>{removeSuggestion(item.id_)}} style={{backgroundColor:"#FAFAFA",outline:"none",border:"none",}}>X</button></div>
                    

                    <Modal
                     
                        onCancel={()=>{setModalVisible(false)}}
                        
                        visible={modalVisible}
                        footer={null}
                    >
                    <div className='container'>
                        <div className='row'>
                        <div className='col-md-6'>
                        <Avatar size={200} src={avatar} />
                        </div>
                        <div className='col-md-6'>
                            <span style={{fontWeight:"bold"}}>{name}</span>
                            <div><span>New to Instagram</span></div>
                            <div className='my-4'>
                                <div><p className='my-3 mx-4' style={{color:"#0000FFF"}}>Followers <span style={{color:"black"}}>: {followers}</span></p></div>
                                <div><p className='mx-4' style={{color:"#0000FFF"}}>Following <span style={{color:"black"}}>: 200</span></p></div>
                            </div>
                            <div>
                                {follow?
                            <><Button className='mx-4' type='primary' onClick={DoFollow}>Follow</Button></>:
                            <><Button className='mx-4' type='danger' onClick={DoFollow}>Unfollow</Button></>}
                            </div>
                            
                        </div>
                        </div>
                    </div>
                    </Modal>  



                 </List.Item>
            </div>
                
          
           
           )
           
       
       })
   }
   else{
       return (
        <>
        <div className='my-4' style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
            <img alt="pic" style={{height:"35px",width:"35px"}} src='./images/806.gif' />
        </div>
        <p  align="center">Click<span  style={{fontWeight:"bold"}}> #Load More</span></p>
        </>)
   }
  
}
