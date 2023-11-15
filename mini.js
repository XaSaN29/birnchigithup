const input = document.querySelector(".input");
const addbtn = document.querySelector(".add");
const list = document.querySelector(".list");




addbtn.addEventListener("click", function(){

if (input.value =="") {
   alert("malumot yozing")
}else{

   const li = document.createElement("li");
   li.classList.add("list_item");
   
   li.innerHTML=input.value;
   
   
   const div=document.createElement('div')


   const i = document.createElement("i");
   i.classList.add('bx', 'bx-trash');
   i.style.marginLeft='10px'

   i.addEventListener("click", function(e){
      e.stopPropagation();
      li.remove();
   });
    
   // <i class='bx bx-edit-alt'></i>
   const bx = document.createElement("i");
   bx.classList.add("bx", "bx-edit-alt");

   div.append(bx) 
   div.append(i)
   bx.addEventListener("click", function(){
   li.style.textDecoration="line-through"
   })





   li.append(div)
   list.append(li);
   input.value ="";
}
   



})