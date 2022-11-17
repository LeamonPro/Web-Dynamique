function a(){
    alert("Hello world");
}
function verif(){
    
var nom = prompt("Quel est votre nom?");
    
if (nom != null) {
    if (confirm(`Vous avez appelez vraimen${nom}`) == true) {
        alert (`Bonjour ${nom}!`);
}
}}