import React, {useState} from 'react'

import HC1Card from './HC1Card'

function C1({data}) {
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
                justifyContent: 'space-between',

            }}>

            {
                cards.map((dd, i) => {
                    return <HC1Card key={i} data={dd} scroll={c_data.is_scrollable} />
                })
            }

        </div>
    )

}

export default C1
