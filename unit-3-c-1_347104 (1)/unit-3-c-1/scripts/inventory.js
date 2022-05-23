   var link = JSON.parse(localStorage.getItem("products"))
   link.map(function(elem,index){
       var box = document.createElement("div")
        var image = document.createElement("img")
        image.src = elem.image

        var type = document.createElement("p")
        type.innerText = elem.type

        var desc = document.createElement("p")
        type.innerText = elem.desc

        var price = document.createElement("p")
        type.innerText = elem.price

        btn.innerText = "Remove"
        btn.setAttribute("id","remove_product")
        btn.addEventListner("click",function()
        {
            removethis(elem,index)
        })
        box.append(image,type,desc,price,btn)
        document.querySelector("#all_products").append(box);
        

   });
   function removethis(elem,index)
   {
       link.splice(index,1)
       window.location.reload();
       localStorage.setItem("products",JSON.stringify(link))
   };
   function getback(e)
   {
       window.location.href = "index.html"
   }