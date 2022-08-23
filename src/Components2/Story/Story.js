import React, { useState } from 'react'

function Story({ stories, setStories }) {


    const [open, setOpen] = useState(false);
    const [modalImg, setModalImg] = useState('');



    function StoryView(story, id) {
        setModalImg(story);

        setOpen(true);

        const arr = [...stories];

        const update = arr.filter((k) => {
            if (k.id === id) {
                k.view = false;

            }
            return k;
        });

        setStories(update);



    }
    function closeTheMod() {
        setOpen(false);
        setModalImg('');
    }



    if (stories) {
        return stories.map((story, i) => {
            const imagee = require(`../../images/${story.source}`);
            const imgee1 = require(`../../images/${story.story}`)
            return (
                <div key={i} >

                    <li >
                        <div onClick={() => { StoryView(imgee1, story.id) }} className="position-relative my-2" style={{ left: "0", marginRight: "15px", }} key={story.id}>
                            <div className="position-relative" style={story.view ? { width: "60px", height: "60px", borderRadius: "50%", border: "2px solid #e84118", padding: "1px" } : { width: "60px", height: "60px", borderRadius: "50%", border: "2px solid gray", padding: "1px" }}>
                                <img src={imagee} alt="..." draggable="false" className="img-fluid rounded-circle" style={{ cursor: "pointer" }} />
                            </div>
                            <div className=" text-small mx-2"><small>{story.name}</small></div>
                        </div>

                    </li>


                    <div onClick={closeTheMod} className={open ? "model open" : "model"} >

                        <img className='modal-img img-fluid' alt='picc' src={modalImg} />
                        <svg onClick={closeTheMod} aria-label="Close" style={{ position: "fixed", top: "10px", right: "10px" }} className="fg7vo5n6 lrzqjn8y m-5" color="#ffffff" fill="#ffffff" height="18" role="img" viewBox="0 0 48 48" width="18"><title>Close</title><path clipRule="evenodd" d="M41.8 9.8L27.5 24l14.2 14.2c.6.6.6 1.5 0 2.1l-1.4 1.4c-.6.6-1.5.6-2.1 0L24 27.5 9.8 41.8c-.6.6-1.5.6-2.1 0l-1.4-1.4c-.6-.6-.6-1.5 0-2.1L20.5 24 6.2 9.8c-.6-.6-.6-1.5 0-2.1l1.4-1.4c.6-.6 1.5-.6 2.1 0L24 20.5 38.3 6.2c.6-.6 1.5-.6 2.1 0l1.4 1.4c.6.6.6 1.6 0 2.2z" fillRule="evenodd"></path></svg>
                    </div>
                </div>

            )


        })
    }
    else {
        return <>Hello</>
    }


}

export default Story;