
function userverif(){
   if(document.getElementById("user").value[0]!=document.getElementById("user").value[0].toUpperCase()){
    alert("Vérifier votre nom d'utilisateur");
   }
}
let user=document.getElementById("user");
user.addEventListener("blur", event => {userverif();});

function checkPassword(password) {
    var span = document.getElementById("pswd1");
    if (password.length >= 8) {
      span.style.color = "green";
      return;
    } else if (password.length >= 6) {
      span.style.color = "yellow";
      return;
    } else {
      span.style.color = "red";
    }
  }

function checkName(name) {
    var span = document.getElementById("nom1");
    if (name=="") {
      span.style.color = "red";
    } else {
      span.style.color = "green";
    }
  }
  function checkLastName(Lname) {
    var span = document.getElementById("prenom1");
    if (Lname!="") {
      span.style.color = "green";
      return;
    } else {
      span.style.color = "red";
    }
  }
  function checkAdr(adr) {
    var span = document.getElementById("adr1");
    if (adr!="") {
      span.style.color = "green";
      return;
    } else {
      span.style.color = "red";
    }
  }
  function checkMail(mail) {
    var span = document.getElementById("mail1");
    if (mail!="") {
      span.style.color = "green";
      return;
    } else {
      span.style.color = "red";
    }
  }
  function checkMessage(msg) {
    var span = document.getElementById("msg1");
    if (msg!="") {
      span.style.color = "green";
      return;
    } else {
      span.style.color = "red";
    }
  }
function verif(){
    let nom=document.getElementById("nom").value;
    let prenom=document.getElementById("prenom").value;
    let adr=document.getElementById("adr").value;
    let mail=document.getElementById("mail").value;
    if(nom!=""&&prenom!=""&&adr!=""&&mail!=""){
        alert("Inscription fait avec succées");
    }
    else{
        alert("Vérifier vos champs!");
    }
}
let but=document.getElementById("but1");
but.addEventListener("click",event => {verif();});