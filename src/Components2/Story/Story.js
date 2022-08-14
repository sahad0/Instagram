import React, { useState } from 'react'
import {Modal} from "antd";
function Story({stories}) {

    
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [pic,setPic] = useState("");
    const showModal = (stry) => {
        setPic(stry);
        setIsModalVisible(true);
    };
  
   
  
    const handleCancel = () => {
        setPic("");
      setIsModalVisible(false);
    }


    if(stories){
        return stories.map((story,i)=>{
           return (
            <>
                <li key={i}>
                    <div onClick={()=>{showModal(story.story)}} className="position-relative my-2" style={{left:"0",marginRight:"15px",}} key={story.id}>
                        <div className="position-relative" style={{width: "60px", height:"60px", borderRadius:"50%", border: "2px solid #e84118", padding: "1px"}}>
                        <img src={story.source} alt="..." draggable="false" className="img-fluid rounded-circle" style={{cursor:"pointer"}} />
                        </div>
                        <div className=" text-small mx-2"><small>{story.name}</small></div>
                    </div>
                    
                </li>
                <Modal footer={null} centered  style={{margin:"unset",maxWidth:"unset"}}  visible={isModalVisible}  onCancel={handleCancel}>
                    <div className='container-fluid'>
                    <img className='img-fluid'src={pic} alt="ipic" style={{scale:"2"}}/>
                    </div>
                </Modal>
            </>
           
           
           )
           
           
       })
   }
   else{
       return <>Hello</>
   }
    
  
}

export default Story;