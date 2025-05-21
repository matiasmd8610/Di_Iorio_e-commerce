import Products from "../data/products.json"

export const getProducts = (category) => {
  // console.log(category);
  
    return new Promise((resolve) => {
        setTimeout(()=> {
          if (category === undefined) {
            resolve(Products)
          } else {
            resolve(Products.filter((product)=> {
              return product.category === category
            }))
          }
        }, 500);
    })
}

export const getSingleProduct = (itemId) => {   
    // console.log(typeof itemId);
    return new Promise((resolve) => {
      setTimeout(()=> {
        resolve(Products.find((product)=> {
            return product.id === Number(itemId)
          }))
        }, 500);
    })
}