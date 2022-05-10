document.querySelector(".next-btn").addEventListener("click", ()=>{
    changeForm();
})
 function changeForm(){
    document.querySelector(".user-data").style.display="none"
    document.querySelector(".registerPage h1").innerHTML="Set Your Address"
    document.querySelector(".user-address").style.display="inline-block"
 }