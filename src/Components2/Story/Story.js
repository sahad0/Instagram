import React from 'react'

function Story({stories}) {

    function Img(storie){
        if(storie){
            return storie.source;
        }
        return "";
    }



    if(stories){
        return stories.map((story,i)=>{
           return (
            <>
                <li>
                    <div className="position-relative my-3" style={{left:"0",marginRight:"15px",}}>
                        <div className="position-relative" style={{width: "60px", height:"60px", borderRadius:"50%", border: "2px solid #e84118", padding: "1px"}}>
                        <img src={Img(story)} alt="..." className="img-fluid rounded-circle" />
                        </div>
                        <div className=" text-small mx-2"><small>{story.name}</small></div>
                    </div>
                    
                </li>
            </>
           
           
           )
           
       
       })
   }
   else{
       return <>Hello</>
   }
    
  
}

export default Story;