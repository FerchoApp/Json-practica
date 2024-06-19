// destructuracion
const simpsons = {
    nombre: "Homer J Simpson",
    edad: 39,
    direccion: {
        calle: "Avenida Siempreviva 742",
        ciudad: "Springfield"
    },
    esEmpleado: true,
    hijos: ["Bart", "Lisa", "Maggie"]
}

const {
    nombre,
     direccion: {calle},
} = simpsons

console.log(nombre)
console.log(calle);