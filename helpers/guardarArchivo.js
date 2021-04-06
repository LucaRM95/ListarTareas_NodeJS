const fs = require("fs")

const archivo = "./db/data.json";

const guardarDB = ( data ) => {
    fs.writeFileSync(archivo, JSON.stringify(data));
}

const leerDB = () =>{
    
    //pregunto si no existe el archivo
    if (!fs.existsSync(archivo)){
        return null;
    }
    
    //En caso de que si exista el archivo, creamos una constante, leemos el archivo
    //y lo guardamos dentro de info (const)
    const info = fs.readFileSync(archivo, {encoding: "utf-8"});
    
    const data = JSON.parse(info);

    //console.log(data);

    return data;
}
    
    

module.exports = {
    guardarDB,
    leerDB
}
