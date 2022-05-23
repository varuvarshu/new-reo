//store the products array in localstorage as "products"

function Myfunction(t,d,p,i)
{
    this.type = t;
    this.desc = d;
    this.price = p;
    this.image = i;
}
var arr = JSON.parse(localStorage.getItem("products")) || []








function addproduct(e)
{
    e.preventDefault();
     let form = document.querySelector("form")
     let type = form.type.value;
     let desc = form.desc.value;
     let price = form.price.value;
     let image = form.image.value;
     console.log(type,desc,price,image)
     let s1 = new Myfunction(type,desc,price,image)
     console.log(s1)
     arr.push(s1)
     localStorage.setItem("products",JSON.stringify(arr))
     window.location.reload();


}
function movetocart(e)
{
   window.location.href = "inventory.html"
}
