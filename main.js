// Agregar al inicio de tu código
console.log("Estado inicial:", JSON.parse(localStorage.getItem('instrumentos')));


const alumnos = [
    {nombre:"Juan Perez", CI: 3403492},
    {nombre:"Maria Rodriguez", CI: 234234},
    {nombre:"Pedro Gomez", CI: 234234},
    {nombre:"Lizzie Gomez", CI: 5313258},
];

// Modificar la inicialización
const instrumentos = (() => {
    const guardados = localStorage.getItem('instrumentos');
    if (guardados) {
        console.log("Cargando instrumentos guardados");
        return JSON.parse(guardados);
    }
    console.log("Usando instrumentos por defecto");
    return [
        {nombre:"Guitarra", tipo:"Cuerda", prestado: false},
        {nombre:"Bateria", tipo:"Percusion", prestado: false},
        {nombre:"Violin", tipo:"Cuerda", prestado:false}
    ];
})();
function guardarEstado() {
    localStorage.setItem('instrumentos', JSON.stringify(instrumentos));
    console.log("Estado guardado:", JSON.parse(localStorage.getItem('instrumentos')));
}


//funcion horario

function horario(hs,hs) {
    let horarioDeAlquiler = Number(prompt("Ingrese hasta que hora desea alquilar"));

    
}

function prestarInstrumento() {
    let instrumentoSolicitado = prompt("Que instrumento desea prestar?");
    let prestamo = instrumentos.find(i => i.nombre.toLowerCase() === instrumentoSolicitado.toLowerCase());
    
    if(!prestamo) {
        alert("Instrumento no encontrado");
        return;
    }
    
    if(prestamo.prestado) {
        alert(`El ${prestamo.nombre} ya está prestado`);
        return;
    }

    prestamo.prestado = true;
    guardarEstado(); // Agregamos esta línea
    alert(`Has prestado: ${prestamo.nombre}`);
}

function devolverInstrumento() {
    let devolucion = prompt("Que instrumento devuelve?");
    let instrumento = instrumentos.find(i => i.nombre.toLowerCase() === devolucion.toLowerCase());
    
    if(instrumento && instrumento.prestado) {
        instrumento.prestado = false;
        guardarEstado(); // Agregamos esta línea
        alert("Instrumento devuelto");
    }
}


//Validar identidad
function validar() {
    let ci = Number(prompt("ingrese su numero de cedula: "));
    let alumno = alumnos.find(alumno => alumno.CI == ci);
    
    if(alumno){
        alert(`Bienvenido/a ${alumno.nombre}`);
        let opcion;
        do {
            opcion = Number(prompt("Que le gustaria hacer? \n 1. Prestar un instrumento \n 2. Prestar una sala \n 3. Devolver un instrumento \n 4. Salir"));
            switch(opcion){
                case 1:
                    prestarInstrumento();
                    break;
                case 2:
                    prestarSala();
                    break;
                case 3:
                    devolverInstrumento();
                    break;
                case 4:
                    alert("Hasta luego");
                    break;
                default:
                    alert("Opcion no valida");
            }
        } while(opcion !== 4);
    }
}
validar();

console.log(instrumentos)