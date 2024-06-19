//Taller 3: Propiedades
const persona = {
    nombre: "Homer J Simpson",
    edad: 39,
    residencia: {
        direccion: "Avenida Siempreviva 742",
        ciudad: "Springfield"
    },
    esEmpleado: true,
    hijos: ["Bart", "Lisa", "Maggie"]
}

//TODO: Mostrar los elementos de la propiedad hijos
// console.log(`Hijo: ${persona.hijos[0]} `);
// console.log(`Hijo: ${persona.hijos[1]} `);
// console.log(`Hijo: ${persona.hijos[2]} `);

const propiedades = 'hijos'

console.log(`Hijo: ${persona[propiedades][0]} `);
console.log(`Hijo: ${persona[propiedades][1]} `);
console.log(`Hijo: ${persona[propiedades][2]} `);