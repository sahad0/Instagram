import React from 'react'

function Story() {
  return (
    <section className='story-container'>
        <div className='card my-3 mx-1'>
            <div className='card-body'>
            <ul>
                <li>
                    <div className='story '>
                        <img src="./images/me.jpg" className='rounded-circle my-1' height={50} alt="story" />
                    </div>
                </li>
            </ul>
            </div>
        </div>
        
    </section>
  )
}

export default Story;