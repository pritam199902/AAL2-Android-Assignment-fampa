import Reac, { useState, useEffect } from 'react'
import Loading from '../Loading'

import HC5Card from './HC5Card'

function C5({ data }) {
    const c_data = data
    const [cards, setcards] = useState(c_data.cards)
    // const [isLoading, setIsLoading] = useState(true)

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
                    return <HC5Card key={i} data={dd} />
                })
            }

        </div>
    )

}

export default C5