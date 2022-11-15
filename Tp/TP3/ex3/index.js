let ul=document.createElement("ul");
let inp=document.createElement("input");
function create(){
    let a=document.getElementById("input").value;
    document.getElementById("input").value="";
    let but=document.createElement("button");
    let b=document.createElement("span");
    let li=document.createElement("li");
    li.id=a;
    but.onclick=function(){
        let child = document.getElementById(a);
        child.parentNode.removeChild(child);
    };
    ul.appendChild(li);
    b.textContent=a;
    but.textContent="Delete";
    li.appendChild(b);
    li.appendChild(but);
    document.getElementById("products").appendChild(ul);
};

