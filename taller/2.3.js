const edad = () => 18;
const calcularFecha = () => (new Date()).toJSON()

// Taller 2.3: Conversiones
const maltrecho = {
    esValido: false,
    calcular: edad(),
    fecha: calcularFecha()
}
const texto = JSON.stringify(maltrecho, ['calcular','fecha'], 4)
//el 4 es el formato


//TODO: Convertir a Texto

console.log(texto);