const colors = require("colors/safe");
require("colors");

const mostrarMenu = () =>{

    return new Promise(resolve => {
        console.clear();

        console.log(colors.green("========================="));
        console.log(colors.america("  Seleccione una Opción  "));
        console.log(colors.green("=========================\n"));

        console.log(`${"1.".green} Crear una tarea`);
        console.log(`${"2.".green} Listar una tarea`);
        console.log(`${"3.".green} Listar tareas completadas`);
        console.log(`${"4.".green} Listar tareas pendientes`);
        console.log(`${"5.".green} Completar tareas`);
        console.log(`${"6.".green} Borrar tareas`);
        console.log(`${"0.".green} Salir \n`);

        const readLine = require("readline").createInterface({
            input: process.stdin,
            output: process.stdout
        });

        readLine.question("Seleccione una opción: ", (opt) => {
            readLine.close();
            resolve(opt);
        });
    });

    

}

const systemPause = () =>{

    return new Promise(resolve => {
        const readLine = require("readline").createInterface({
            input: process.stdin,
            output: process.stdout
        });
    
        readLine.question(`\n Persione ${ "ENTER".green } para continuar \n`, (opt) => {
            readLine.close();
            resolve();
        });
    });

    
}

module.exports = {
    mostrarMenu,
    systemPause
}

