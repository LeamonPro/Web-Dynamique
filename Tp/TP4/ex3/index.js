let div=document.createElement("div");
let p=document.createElement("p");
let ul=document.createElement("ul");

p.textContent="Language basés sur ECMAScript";
div.appendChild(p);
a=["JavaScript","JScript","ActionScript","EX4"];
for(let i=0;i<a.length;i++){
    let li=document.createElement("li");
    li.textContent=a[i];
    ul.appendChild(li);
}
div.id="divTP2";
div.appendChild(ul);
document.querySelector("body").appendChild(div);

