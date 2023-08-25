const addingHtmlElementsJs=()=>
{
    let root = document.getElementsByClassName("root")[0];
    let nav = document.createElement("nav");
    let li1 = document.createElement("li");
    let an = document.createElement("a");
    li1.textContent ="home";
    nav.appendChild(li1);
    root.appendChild(nav);
}
addingHtmlElementsJs();