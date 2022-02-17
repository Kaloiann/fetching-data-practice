import React, { useEffect, useState } from 'react'

function Products2() {
    const [data, setData] = useState()
    //fetch data
    //create useState
    //map data
    
    useEffect(async() => {
        const res = await fetch('https://fritz-kola-challenge.s3-eu-west-1.amazonaws.com/products.json')
        const json = await res.json()
        setData(json.products)
    }, [])
    
  return (
    <>
    {data?.map((product, index) => 
      <ul key={`${product.name}_${index}`}>
          <li>
            <h1>{product.name}</h1>
            <img src={product.image} alt="" />
            <p>{product.price}</p>
          </li>
      </ul>)
    }
    </>
  )
}

export default Products2