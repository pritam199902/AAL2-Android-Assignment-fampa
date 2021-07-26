import React from 'react'
import './style.css'

function HC1Card({ data, scroll }) {
    return (
        <a href={data.url}>

            <div className="card card-body m-auto" style={{ width: scroll ? 'max-content': '100%', backgroundColor: data.bg_color }} >
                <div className="c1-div ">
                    <img src={data.icon.image_url} alt="image" style={{ height: '50px' }} />
                    <div className="sub-div" >
                        <div className="c1-title" style={{ textAlign: data.formatted_title.align }} >
                            {data.formatted_title.text} 
                        </div>
                        
                        <div className="c1-desc" style={{ textAlign: data.formatted_title.align }} >
                            {data.formatted_description ? data.formatted_description.text : ''}
                        </div>
                    </div>

                </div>
            </div>
        </a>
    )
}

export default HC1Card
