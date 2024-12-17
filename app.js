
let productdiv = document.querySelector(".product");
var categorylistDiv = document.querySelector(".CategoryList");
let allcat = [];
let displayProduct = async (allcheckCat=[]) => {
    productdiv.innerHTML ='';
    let product =await fetch('https://fakestoreapi.com/products');
    let finalproduct =await product.json();
    finalproduct.forEach(element => {
        if(!allcat.includes(element.category)){
        categorylistDiv.innerHTML +=`<label>
                    <input type="checkbox" onclick='categoryFilter()' value="${element.category}">${element.category}
                </label>
        `
        
        allcat.push(element.category)
        }
      if(allcheckCat.length==0){
        allcheckCat = allcat;
      }
     

     if(allcheckCat.includes(element.category)){
        productdiv.innerHTML += `<div class="productItems">
        <img src="${element.image}">
        <h4>${element.category}</h4>
                <p>Price:${element.price} | ${element.rating.rate} </p>
                <h3>${element.title}</h3>
            </div>`
     }
    });

}
displayProduct()
  let categoryFilter=() =>{
    let checkinput = document.querySelectorAll("input[type='checkbox']");
    let checkdata = [];
    checkinput.forEach((e)=>{
        if(e.checked){
            checkdata.push(e.value);
            
        }
    })
    displayProduct(checkdata);
    
  }
