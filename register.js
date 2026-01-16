let paragraphId=document.getElementById("paragraph");
let firstnameId =document.getElementById("firstname");
let submitButton=document.getElementById("submitbtn");
submitButton.addEventListener("click",function(){
   if(firstnameId.value===" "){
    paragraphId.style.color="red";
    paragraphId.innerText="first name is required";
   }

})