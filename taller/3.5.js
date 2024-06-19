const pagina = {
    alIniciar: () => console.log('se ha iniciado el ciclo de vida'),
    alFinalizar: () =>console.log('se ha finalizado el ciclo de vida')
}

const metodo = (evento) => evento && pagina[evento]()

let evento = 'alFinalizar'
metodo(evento)