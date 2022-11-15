function affichage(){
    if (document.getElementById("pseudo").value==="" || document.getElementById("email").value==="" || document.getElementById("pswd").value===""){
        alert("souvenez-vous de vos informations ");

    }
    else {
        alert("Vous etes connecté en tant que :"+document.getElementById("pseudo").value+"\nVotre mot de passe est :"+document.getElementById("pswd").value+"\net votre email est :"+document.getElementById("email").value)
    }

}
function Reset() {
    document.getElementById('for').reset();
    }
