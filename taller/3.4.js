const buscar =(valor) =>{
let resultado = ''
switch(valor) {
    case 1:
      resultado = 'uno'
      break;
    case 2:
      resultado = 'dos'
      break;
    default:
      resultado = 'cero'
      break;
  }
  return resultado
}
  console.log(buscar(1))