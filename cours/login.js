let user="admin"
let mdp="topadmin"
function verif(){
    if((document.getElementById("user").value==user) && (document.getElementById("pswd").value===mdp)){
        alert("Votre identification a été fait avec succes");
    }   
    else {
        alert("User ou MP incorrect!");
    };
}
let but=document.getElementById("but1");
but.addEventListener("click", event => {verif();});