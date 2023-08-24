
const header = document.querySelector("header");

let overskrift = document.createElement("h1");
let text = document.createTextNode("Velkommen til Medina");
overskrift.appendChild(text);
header.appendChild(overskrift);