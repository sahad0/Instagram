import React from 'react'
import Story from '../Story/Story';

function Newsfeed() {
  return (
    <>
    <div className='container-fluid'>
        <div className='row'>
            <div className='col-md-3'> </div>
            <div className='col-md-4'>
                <div className='row'>
                    <div className='col-md-1'></div>
                    <div className='col-md-10'><Story /></div>
                </div>
            </div>
            <div className='col-md-5'>SUggestions</div>
        </div>
    </div>
        
    </>
  )
}
export default Newsfeed;