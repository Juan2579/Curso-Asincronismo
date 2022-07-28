import fetch from "node-fetch";
const API = "https://api.escuelajs.co/api/v1";

function postData(urlApi, data){
    const response = fetch(urlApi, {
        method: "POST",
        mode: "cors",
        credentials: "same-origin",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)

    })

    return response;
}

const data = {
    "title": "Curso de Asincronismo",
    "price": 100,
    "description": "Excelente curso de asincronismo. (Gratis para los estudiantes de Platzi )",
    "categoryId": 4,
    "images": ["https://placeimg.com/640/480/any"]
}

postData(`${API}/products`, data)
     .then(response => response.json())
     .then(data => console.log(data));



//PUT
function putData(urlApi, dataUpdate){

    const response = fetch(urlApi, {
        method: "PUT",
        mode: "cors",
        credentials: "same-origin",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dataUpdate)
    })

    return response;
}

const dataUpdate = {
    price: 500,
}
 putData(`${API}/products/249`, dataUpdate)
    .then(response => response.json())     
    .then(data => console.log(data));


//DELETE
function deleteData(urlApi){
    const response = fetch(urlApi, {
        method: "DELETE",
        mode: "cors",
        credentials: "same-origin",
        headers:{
            "Content-Type": "application/json"
        },
    })

    return response;
}

const idDeleted = 249

deleteData(`${API}/products/${idDeleted}`)
    .then(response => response.json())
    .then(data => console.log(data))