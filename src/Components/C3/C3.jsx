import React, { useState, useEffect } from 'react'
import HC3Card from './HC3Card'



function C3({ data }) {
    // console.log(">> ",data);
    const c_data = data
    const [cards, setcards] = useState(c_data.cards)    


    return (
        <div style={{
            display:  "flex" ,
            flexDirection: 'row',
            overflowX: c_data.is_scrollable ? 'auto' : 'hidden',
            justifyContent: 'flex-start'
        }}>

            {
                cards.map((dd, i) => {
                    return <HC3Card key={i} data={dd} />
                })
            }

        </div>
    )
}

export default C3