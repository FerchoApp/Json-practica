const got = require('../data/got.json')
const saveFile = require('../api/saveFile')

for(const clave in got ){
    if(got.hasOwnProperty(clave)){
        const element = got[clave]
        // element.season = 8
        if(element.genero === 'Male'){
            element.genero = 'Hombre'
        }
    }
}

 console.table(got)
saveFile.toJSON(got)