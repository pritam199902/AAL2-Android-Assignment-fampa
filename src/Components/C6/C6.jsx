import React, { useState, useEffect } from 'react'

import HC6Card from './HC6Card'

function C6({ data }) {
    
    const c_data = data
    const [cards, setcards] = useState(c_data.cards)
    
    // console.log(c_data);


    return (
        <div
            className="my-3"
            style={{
                display: "flex",
                flexDirection: 'row',
                overflowX: c_data.is_scrollable ? 'auto' : 'hidden',
                justifyContent: 'flex-start',

            }}>

            {
                cards.map((dd, i) => {
                    return <HC6Card key={i} data={dd} />
                })
            }

        </div>
    )
}

export default C6