import React, { useEffect, useState } from 'react'
import Story from '../../Components2/Story/Story';



function Newsfeed() {


    const [stories,setStories] = useState([]);
    

    useEffect(()=>{
      var strs = [ 
        {"id":1,"name":"fifi______x","source":"./images/me.jpg"},
        {"id":2,"name":"ErenYeagar","source":"./images/1.jpg"},
        {"id":3,"name":"Naruto","source":"./images/2.jpg"},
        {"id":4,"name":"Hinataa","source":"./images/3.png"},
        {"id":5,"name":"GojoGag","source":"./images/4.jpg"},
        {"id":6,"name":"ENo_NoW","source":"./images/5.jpg"},
        {"id":7,"name":"JOkerJk","source":"./images/6.jpg"},
        {"id":8,"name":"THeLast","source":"./images/7.jpg"},
        {"id":9,"name":"MikeTys_","source":"./images/8.jpg"},
        {"id":10,"name":"Willy","source":"./images/9.jpg"},
      ];
      setStories(strs);
    },[]);



  return (
    <>
    <div className='container-fluid'>
        <div className='row'>
            <div className='col-md-3'> </div>
            <div className='col-md-4'>
                <div className='row'>
                    <div className='col-md-1'></div>
                    <div className='col-md-10'>
                    <section className='story-container'>
                        <div className='card my-3 mx-1'>
                          <ul className='storylist' style={{listStyle:"none",display:"flex",flexDirection:"row",overflowY:"auto"}}>
                              <Story stories={stories} />
                            </ul>
                        </div>
                    </section>
                    </div>
                </div>
            </div>
            <div className='col-md-5'>SUggestions</div>
        </div>
    </div>
        
    </>
  )
}
export default Newsfeed;