let floats = 10.2;
console.log(floats);
let integers = 10;
console.log(integers);
let konutKredileri = ['konut kredisi', 'taşıt kredisi', 'kamu konut kredisi'];
let newArrays = ['fark', 'data', ['m']];

console.log(konutKredileri[1] + ':' + konutKredileri[2][1]);
console.log(konutKredileri[2][0]);
console.log(konutKredileri[2][1]);
console.log(konutKredileri[2][2]);
console.log(newArrays[0], newArrays[2]);


console.log('<ul>');
for (let i = 0; i < konutKredileri.length; i++) {
    console.log(`<li>` + konutKredileri[i] + `</li>`)

}
console.log('</ul>');