import React from 'react'
import { Avatar, List } from 'antd';
export default function SuggestionRender({suggest,setSuggest}) {


    function removeSuggestion(id_){
        let carray = [...suggest];
        const updated = carray.filter((p)=>{
            return p.id_!==id_;
           
        });
        setSuggest(updated);
    }

    if(suggest.length>0){
        return suggest.map((item,i)=>{
           return (
            <>
            <div  style={{height:"20%",backgroundColor:"#FAFAFA"}} key={i}>
            <List.Item>
                   <List.Item.Meta
                     avatar={<Avatar  src={item.source} />}
                     title={<a href="https://ant.design" style={{fontWeight:"bold",fontSize:"13px"}}>{item.name}</a>}
                     description={<small style={{marginBottom:"25px !important"}}>New to Instagram</small>}
                   />
                    <div style={{fontWeight:"bold",color:"#3AA1F6",fontSize:"12px",cursor:"pointer"}}><button onClick={()=>{removeSuggestion(item.id_)}} style={{backgroundColor:"#FAFAFA",outline:"none",border:"none",}}>X</button></div>
                 </List.Item>
            </div>
                
           </>
           
           )
           
       
       })
   }
   else{
       return (
        <>
        <div className='my-4' style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
            <img alt="pic" style={{height:"35px",width:"35px"}} src='./images/806.gif' />
        </div>
        </>)
   }
  
}
