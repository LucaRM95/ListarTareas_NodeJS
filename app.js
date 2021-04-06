require("colors");
const { guardarDB, leerDB } = require("./helpers/guardarArchivo");
const { inquirerMenu, 
        pause,
        leerInput,
        listadoTareasBorrar,
        confirmar,
        mostrarListadoChecklist
} = require("./helpers/inquirer");

const Tareas = require("./models/tareas");

const main = async () => {

    let opt = "";
    const tareas = new Tareas();

    const tareasDB = leerDB();

    if(tareasDB){
        tareas.cargarTareasFromArray(tareasDB);
    }

    do{
        //imprimir el menú
        opt = await inquirerMenu();

        switch(opt){
            case "1":
                const desc = await leerInput("Descripción:");
                tareas.crearTarea( desc );
            break;

            case "2":
                tareas.listadoCompleto();
                //console.log(tareas.listadoArr);
            break;

            case "3": //listar completadas
                tareas.listarPendientesCompletadas(true);
            
            break;

            case "4"://listar pendientes
                tareas.listarPendientesCompletadas(false);
            
            break;

            case "5"://listar pendientes
                const ids = await mostrarListadoChecklist(tareas.listadoArr);
                tareas.toggleCompletadas( ids );
            break;

            case "6"://listar pendientes
                const id = await listadoTareasBorrar(tareas.listadoArr);
                if(id !== "0"){

                    const ok = await confirmar("¿Está Seguro?");
                    
                    if(ok){
                        tareas.borrarTarea(id);
                        console.log("Tarea borrada");
                    }
                }
            break;
        }

        guardarDB( tareas.listadoArr);

        await pause();

    }while(opt !== "0");
}

main();