function validation(){
    var isError = false;
    var divs = document.querySelectorAll('input.test');

[].forEach.call(divs, function(item) {

 if(item.value.length == 0){
       document.getElementById("error").innerHTML="La saisi des champs est oblgatoire";
       isError = true;

   }
   else if (item.value.length <5) {
       document.getElementById("error").innerHTML="Les champs doivent contenir au moins 5 caracteres";
       isError = true;
   }
   
   
   
   
});
if(isError == false){
       document.getElementById("ls").style.backgroundColor="green";
document.getElementById("error").innerHTML="Bienvenue:"  + ""+ document.getElementById("nom").value;
   }

}