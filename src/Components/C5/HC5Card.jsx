import React from 'react'
import './style.css'

function HC5Card({data}) {
    return (
        <a href={data.url} className="card card-body p-0 " style={{ minWidth: '100%', backgroundColor: data.bg_color, marginRight: '2px'  }} >
            <img src={data.bg_image.image_url} className="c5-image" alt="image" style={{ aspectRatio: data.bg_image.aspect_ratio }} />
        </a>
    )
}

export default HC5Card
