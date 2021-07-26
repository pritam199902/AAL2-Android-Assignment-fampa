import React from 'react'
import './style.css'

function HC6Card({ data }) {
    return (
        
        <a href={data.url} className="card card-body m-auto" style={{ minWidth: '100%' }} >
            <div className="c6-div ">
                <img src={data.icon.image_url} alt="image" style={{ height: '50px' }} />
                <div className="sub-div" >
                    <div className="c6-title" style={{textAlign: data.formatted_title.align }} >
                        {data.formatted_title.text}
                    </div>
                </div>
                <div className="right-icon" >
                    <i className="fa fa-angle-right"></i>
                </div>
            </div>
        </a>
       
    )
}

export default HC6Card
