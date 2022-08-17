import React from 'react'

export default function ReelsRender({img,setOpen,setModalImg,viewmodal}) {
  if(img){
    return (img.map((k,i)=>{
        return(
            
                <div className='hold' key={i} onClick={()=>{viewmodal(k.src)}}>
                    <div style={{display:"flex",alignItems:"center",justifyContent:"center",}}>
                    
                    <img alt="picc" draggable={false} style={{zIndex:"0"}} src={k.src} className='img-fluid coll m-1'  />        
                    
                    </div>
                </div>
                
            
        )
    }))
  }
  else{
    return (<></>);
  }
}
