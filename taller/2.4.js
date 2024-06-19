// Taller 2.4: Conversiones
const Conversiones = (clave, valor) =>{
    if(typeof valor !== "string"){
        return valor
    }
    // const isoDate = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/
    // if(isoDate.test(valor)){
    if(clave === "fecha"){
        return new Date(valor)
    }
    return valor
}

const texto = '{"esValido": false, "calcular": 18, "fecha": "2024-06-18"}';
const maltrecho = JSON.parse(texto)
//TODO: Convertir a Objeto

console.log(maltrecho);