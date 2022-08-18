import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ReelsRender from '../../Components2/ReelsRender/ReelsRender';

export default function Reels() {
        const [img,setImg] = useState([]);
        const [open, setOpen] = useState(false);
        const [modalImg,setModalImg] = useState('');

        useEffect(()=>{
                getImg();
        },[]);

        async function getImg(){
                const data = await axios.get('https://sahad0.github.io/Instagram-Reels/reels.json');
                if(data){
                        
                        setImg(data.data.reels);
                }
        }

        function viewmodal(src){
                setModalImg(src);
                if(modalImg){
                        setOpen(true);
                }
                
        }

       

  return (
        <>
                <div className={open ? "model open" : "model"} onClick={()=>{setOpen(false)}}>
                        
                      <img className='modal-img img-fluid' alt='picc' src={modalImg}   />
                      <svg onClick={()=>{setOpen(false)}} aria-label="Close" style={{position:"fixed",top:"10px",right:"10px"}} className="fg7vo5n6 lrzqjn8y m-5" color="#ffffff" fill="#ffffff" height="18" role="img" viewBox="0 0 48 48" width="18"><title>Close</title><path clipRule="evenodd" d="M41.8 9.8L27.5 24l14.2 14.2c.6.6.6 1.5 0 2.1l-1.4 1.4c-.6.6-1.5.6-2.1 0L24 27.5 9.8 41.8c-.6.6-1.5.6-2.1 0l-1.4-1.4c-.6-.6-.6-1.5 0-2.1L20.5 24 6.2 9.8c-.6-.6-.6-1.5 0-2.1l1.4-1.4c.6-.6 1.5-.6 2.1 0L24 20.5 38.3 6.2c.6-.6 1.5-.6 2.1 0l1.4 1.4c.6.6.6 1.6 0 2.2z" fillRule="evenodd"></path></svg>
                </div>
                {open ?
                 <></>
                 :
                 <><div className='grid-system'>
                        
                 <ReelsRender img={img} setOpen={setOpen} setModalImg={setModalImg} viewmodal={viewmodal}/>
                 
                </div></>}
                
         </>
    
  )
}
