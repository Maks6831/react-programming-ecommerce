// Products page local storage

import React, { useState } from 'react'

const [productID, setProductID] = useState({})

const saveClick = () => {
    localStorage.setItem('productID', JSON.stringify(productID))
    console.log('productID: ' + productID)
}


<button onclick={handleSaveClick}> Add to Basket </button>

// Basket Page 

import React, { useState } from 'react'

const savedProductID = localStorage.getItem(json.stringify('productID'))


