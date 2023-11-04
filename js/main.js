const lista = ["Mela", "Pera", "Banana", "Kaffè"];

console.log(lista);

let i = 0;

while(i < lista.length) {
    const el = lista[i];
    document.querySelector("#lista").innerHTML += `<li>${el}</li>`;
    i++;
}