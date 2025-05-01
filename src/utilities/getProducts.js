import Products from "../data/products.json"
// const products = [
//     {
//       id: 1,
//       name: "Aceite Oliva Común",
//       image: "aceite_oliva_comun.jpg",
//       price: 19.99,
//       description: "Camiseta de algodón 100% en varios colores.",
//       discount: "20%"
//     },
//     {
//       id: 2,
//       name: "Berenjenas en escabeche",
//       image: "aceite_oliva_comun.jpg",
//       price: 49.99,
//       description: "Pantalón de mezclilla azul de corte recto.",
//       discount: "20%"
//     },
//     {
//       id: 3,
//       name: "Cebollas caramelizadas",
//       image: "aceite_oliva_comun.jpg",
//       price: 69.99,
//       description: "Zapatillas cómodas para uso diario o entrenamiento.",
//       discount: "20%"
//     },
//     {
//       id: 4,
//       name: "Tomates Cherrys Confitados",
//       image: "aceite_oliva_comun.jpg",
//       price: 129.99,
//       description: "Chaqueta estilo biker de cuero sintético.",
//       discount: "20%"
//     },
//     {
//       id: 5,
//       name: "Hummus Ajo",
//       image: "aceite_oliva_comun.jpg",
//       price: 129.99,
//       description: "Chaqueta estilo biker de cuero sintético.",
//       discount: ""
//     },
//     {
//       id: 6,
//       name: "Pickles",
//       image: "aceite_oliva_comun.jpg",
//       price: 129.99,
//       description: "Chaqueta estilo biker de cuero sintético.",
//       discount: "10%"
//     },
//     {
//       id: 7,
//       name: "Hummus Remolacha",
//       image: "aceite_oliva_comun.jpg",
//       price: 129.99,
//       description: "Chaqueta estilo biker de cuero sintético.",
//       discount: ""
//     }
// ]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(()=> {
          resolve(Products)
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