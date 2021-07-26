import React, { useState } from 'react'

import HC9Card from './HC9Card'

function C9({ data }) {
    const c_data = data
    const [cards, setcards] = useState(c_data.cards)
    // const [isLoading, setIsLoading] = useState(true)




    return (
        <div
            className="my-3"
            style={{
                display: "flex",
                flexDirection: 'row',
                overflowX: 'auto'
            }}>


            {
                cards.map((dd, i) => {
                    return <HC9Card key={i} data={dd} maxheight={c_data.height} />
                })
            }

        </div>
    )
}

export default C9