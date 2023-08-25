const addingHtmlElementsJs=()=>
{
    let root = document.getElementsByClassName("root")[0];
let h1 = document.createElement("h1");
h1.textContent ="hello world"
root.appendChild(h1);
}
addingHtmlElementsJs();