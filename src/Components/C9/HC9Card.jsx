import React from 'react'
import './style.css'

function HC9Card({ data, maxheight }) {
    return (
        <a href={data.url} style={{ height: '100%' }} >
            <img src={data.bg_image.image_url} alt="" className="mx-1" style={{aspectRatio: data.aspect_ratio, height: maxheight, borderRadius: '10px'}} />
        </a>
    )
}

export default HC9Card
