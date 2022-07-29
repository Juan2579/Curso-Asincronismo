import fetch from "node-fetch";
const API = "https://api.escuelajs.co/api/v1"

const fetchData = async (urlApi) => {
    const response = await fetch(urlApi)
    const data = await response.json()
    return data
}

async function* generator(){
     const products = await fetchData(`${API}/products`)
     
     const product = await fetchData(`${API}/products/${products[0].id}`)

     const category = await fetchData(`${API}/categories/${product.category.id}`)

     yield console.log(products)
     yield console.log(product.title)
     yield console.log(category.name)
}

const g = generator();

g.next().value
g.next().value
g.next().value