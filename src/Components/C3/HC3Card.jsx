import React, { useEffect, useState } from 'react'
import './style.css'
import { useLongPress } from 'react-use'


function HC3Card({ data }) {
    const [show, setShow] = useState(false)
    // console.log(data);



    const handleRemindLater = () => {
        alert("Reminder later")
    }

    const handleDissmissNow = () => {
        alert("Dissmiss now")
    }


    const onLongPress = () => {
        setShow(!show)
    };

    const handleClick =()=>{
        // setShow(false)
    }

    const defaultOptions = {
        isPreventDefault: true,
        delay: 500
    };


    const longPressEvent = useLongPress(onLongPress, defaultOptions);


    return (
        <div className="card card-body m-auto p-0 m-1" style={{ minWidth: '100%', }} >
            <div style={{ display: 'flex', flexDirection: 'row' }} >

                {
                    show &&

                    <div className="p-3" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly' }} >

                    
                        <div className="long-press-option-btn text-center" onClick={() => { handleRemindLater() }} style={{ cursor: 'pointer' }} >
                            <i className="fa fa-plus op-icon" ></i>
                            <div className="op-txt">remind later</div>
                        </div>
                       <div className="long-press-option-btn  text-center" onClick={() => { handleDissmissNow() }} style={{ cursor: 'pointer' }} >
                            <i className="fa fa-plus op-icon"></i>
                            <div className="op-txt">dissmiss now</div>
                        </div>
                       
                    </div>
                }

                <div className="card card-body" aria-disabled={data.is_disabled} style={{ minWidth: '100%', zIndex: 100000, backgroundColor: `${data.bg_color}` }} onClick={handleClick} {...longPressEvent}  >


                    <img  src={data.bg_image.image_url} alt="image" style={{ width: '100%', aspectRatio: `${data.bg_image.aspect_ratio}` }} />
                    <div className="hc3title">
                        {data.formatted_title.text}
                    </div>

                    <div className="hc3desc">
                        {data.formatted_description.text}
                    </div>
                    {
                        data.cta.map((dd, j) => {
                            // "text": "Add",
                            // "bg_color": "#000000",
                            // "text_color": "#FFFFFF",
                            // "url_choice": "add",
                            // "url": "https://instagram.com/"
                            return (
                                <a key={j} href={dd.url}  className="hc3action"
                                    style={{
                                        color: `${dd.text_color}`,
                                        backgroundColor: `${dd.bg_color}`,
                                    }}
                                >
                                    {dd.text}
                                </a>
                            )
                        })
                    }


                </div>

            </div>
        </div>
    )
}

export default HC3Card


