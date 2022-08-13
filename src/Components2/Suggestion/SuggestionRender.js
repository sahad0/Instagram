import React from 'react'
import { Avatar, List } from 'antd';
export default function SuggestionRender({suggest}) {

    if(suggest){
        return suggest.map((item,i)=>{
           return (
            <>
            <div  style={{height:"20%",backgroundColor:"#FAFAFA"}}>
            <List.Item>
                   <List.Item.Meta
                     avatar={<Avatar  src={item.source} />}
                     title={<a href="https://ant.design" style={{fontWeight:"bold",fontSize:"13px"}}>{item.name}</a>}
                     description={<small style={{marginBottom:"25px !important"}}>New to Instagram</small>}
                   />
                    <div style={{fontWeight:"bold",color:"#3AA1F6",fontSize:"12px",cursor:"pointer"}}>Follow</div>
                 </List.Item>
            </div>
                
           </>
           
           )
           
       
       })
   }
   else{
       return <>Hello</>
   }
  
}
