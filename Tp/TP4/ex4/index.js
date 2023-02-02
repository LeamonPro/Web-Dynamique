let ul=document.createElement("ul");
let inp=document.createElement("input");
function create(){
    let a=document.getElementById("input").value;
    document.getElementById("input").value="";
    let but=document.createElement("button");
    let b=document.createElement("span");
    let li=document.createElement("li");
    but.id=a;
    but.onclick=function(){
        let child = document.getElementById(a);
        child.parentNode.remove();
    };
    ul.appendChild(li);
    b.textContent=a;
    but.textContent="Delete";
    but.classList.add("but");
    li.appendChild(b);
    li.appendChild(but);
    li.classList.add("items");
    document.getElementById("products").appendChild(ul);
};
