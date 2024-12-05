// import React, { useState } from 'react'

// const SingleProduct = () => {
//     const [product , seyoroduct] = useState(JSON.parse(window.sessionStorage.getItem('product')))
//     console.log(product)
//     return    (
//         <div>SingleProduct</div>
//     )
// }

// export default SingleProduct

import React from 'react'
import { useSelector } from 'react-redux'

const SingleProduct = () => {
    console.log(useSelector(x => x))
    return (
        <div>SingleProduct</div>
    )
}

export default SingleProduct