
function validation() {
    var isError=false;
    var divs= document.querySelectorAll('input.test');
    [].forEach.call(divs, function(item) {
    
if(item.value.length == 0){
       document.getElementById("error").innerHTML="La saisi des champs   est oblgatoire";
       isError = true;
    }

        
    else if(item.value.length<5){
        document.getElementById("error").innerHTML="le nom doit contenir au moins 5 caracteres";
        document.getElementById("error").removeAttribute("hidden");
        isError=true;
                             }
                            

    });

if(isError==false){
    document.getElementById("resultat").style.backgroundColor ="green";
document.getElementById("resultat").innerHTML="Bienvenue:"+ document.getElementById("nom").value;
    
    }
         
        
}







