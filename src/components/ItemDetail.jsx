import React from 'react'

const ItemDetail = (props) => {
  // console.log(props.product);
  
  return (
    <div>
        <p>{props.product.name}</p>
    </div>
  )
}

export default ItemDetail