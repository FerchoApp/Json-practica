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

//TODO: Mostrar cada propiedad
// console.log(persona);
// console.log(`Nombre: ${persona.nombre} `);
// console.log(`Edad: ${persona.edad} `);
// console.log(`Recidencia: `);
// console.log(`Direccion: ${persona.residencia.direccion} `);
// console.log(`ciudad: ${persona.residencia.ciudad} `);
// console.log(`Trabajando: ${persona.esEmpleado ? 'si' : 'no'} `);
// console.log(`Hijos: ${persona.hijos.join(', ')} `);
console.log(`Nombre: ${persona['nombre']} `);
console.log(`Edad: ${persona['edad']} `);
console.log(`Recidencia: `);
console.log(`Direccion: ${persona['residencia'].direccion} `);
console.log(`ciudad: ${persona['residencia']['ciudad']} `);
console.log(`Trabajando: ${persona['esEmpleado'] ? 'si' : 'no'} `);
console.log(`Hijos: ${persona['hijos'].join(', ')} `);