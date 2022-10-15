//  fetch('https://fakestoreapi.com/products')
//  .then(response=> response.json())
//  .then(data=>console.log(data)).catch(err=>console.log(err));

let data = document.getElementsByClassName('list')[0];
let callAPI = async () =>{
   await fetch('https://fakestoreapi.com/products',{
        method: 'GET',
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=>res.json()).then(result=> {
        let list = '';
        for(i=0;i<result.length;i++){
           list += `
            <tr onclick="detail(${result[i].id})">
                <td>${result[i].id}</td>
                <td class="td-title">${result[i].title}</td>
                <td>${result[i].price}</td>
                <td>${result[i].rating.rate}</td>
                <td class="td-img">
                    <a href="${result[i].image}" target="_blink">
                        <img src="${result[i].image}">
                    </a>
                </td>
            </tr>`
        }
        data.innerHTML = list
    })
}
callAPI();

let cardBody = document.getElementsByClassName('card-body')[0];
detail = (id) =>{
    let result = "";
    fetch('https://fakestoreapi.com/products' + "/" + id)
    .then(res=> res.json())
    .then(data=> {
        result += `
        <div class= 'detail-page'>
        <img src="${data.image}">
        <div>
        <p>Name :  ${data.title} </p>
        <p>Price: ${data.price} </p>
        </div>
        </div>
        `
       cardBody.innerHTML = result;
    });
}



