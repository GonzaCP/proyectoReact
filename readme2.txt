/*          IN GENERAL      */

git status ---> estado general en el que se encuentra .
git add . ---> se agregan los cambios realizados
git commit -m "algún título de referencia hacia lo modificado" ---> se guardan los cambios con el título
git push origin master ---> se suben los cambios realizados al repositorio de github






CLASE 2

/*   COMANDOS    */

Shift + Tab = Tabula hacia la izq.

ctrl + c ---> termina la compilación

npm install -g create-react-app proyecto_react ---> Se instala React js local
npm start ---> Se utiliza en la carpeta donde se encuentra el archivo package.json




CLASE 3

Node.js es un entorno de ejecución

         -----

const num = [1, 2, 3, 4]

/* SPREAD OPERATOR "..."  */

const num2 = [...num]

console.log(num) ---> [1, 2, 3, 4]
console.log(num2) --> [1, 2 , 3 , 4] 

	 -------

const num2 = [...num, 5]

console.log(num2) --> [1, 2 , 3 , 4, 5] 

    -------

const persona = {
    name: "Seba",
    age: 28, 
    country: "Argentina"
}

const persona2 = {
    ...persona,
    name: "Monroe"
}

console.log(persona) ----> { name: "Seba", age: 28, country: "Argentina"}
console.log(persona2) ---> { name: "Monroe", age: 28, country: "Argentina"}

    -------

const id = "chau"

const obj = {
    prop: 20,
    [id]: "esto es un string"
}

console.log(obj["chau"]) --- > "esto es un string"

    -------


/* DEEP MATCHING */

const persona = {
    name: "Seba",
    age: 28
}

const { name } = persona
console.log(name) ----> "Seba"

    -----
const persona = {
    name: "Seba",
    age: 28
}

const persona2 = {
    name: "Pepe",
    age: 25
}

const { name: namePersona1 } = persona
const { name: namePersona2 } = persona2

console.log(namePersona1) ----> "Seba"
console.log(namePersona2) ----> "Pepe"

    ------

/* ASIGNACIÓN EN DESESTRUCTURACIÓN  */

const age = [18, 22, 34, 32]

const [tomas, alejandro, seba, angel] = age

console.log(seba) ----> 34

Se copia un valor primitivo

    ------

const age = [18, 22, 34, 32]

const [tomas, alejandro, ...resto] = age

console.log(resto) ----> 34, 32
console.log(resto[1]) ----> 32

    
    ------

/*    POLYFILL     */

Un polyfill es una función específica que se le instala a nuestro código, cuando éste no la reconoce.
En este caso le estamos añadiendo un polyfill con la funcion de multiplicar. Esto sucede cuando nuestro entorno
gráfico no reconoce "tal" funcionabilidad.

EJ:

Number.prototype.multiplicar = function (numero) {
    let acc = 0

    for (let i = 0; i < numero ; i++) {
        acc += this
    }

    return acc
}

const num = 5

const result = num.multiplicar(9)

console.log(result) -----> 45


    -------


/*     WEB PACK     */

webPack es el encargado de empaquetar todos los import y export que se van realizando.

/*    Transpiling    */

Es el proceso de convertir nuestro código (sea cual sea) a JSX.

En JSX se agregan las clases declaradas en .css con el atributo 'className="nombreDeLaClase"'

EL archivo .css se debe importar en el archivo .js a través de la sintaxis "import 'ruta donde se encuentra archivo .css'"


    --------

El componente que se va estar visualizando es el App.js. En el mismo deben estar importados todos los archivos que se van a utilizar.
En el componente index.js se encuentra importado el componente App. El componente index.js es el que hace la conexion con index.html.

En el archivo Navbar.js (donde voy a estar trabajando siempre) se utiliza 
camelCase para darle los estilos (dentro del JSX). A los eventos también se los invoca con camelCase.

npm install bootstrap ---> instalo bootstrap
importar en index.ja la línea de código 'import 'bootstrap/dist/css/bootstrap.css''






CLASE 4    /* COMPONENTES */





Utilizar estos caracteres para renderizar los componentes del html:
<>
</>

Los componentes se mencionan SIEMPRE con Pascalcase.

/* PROPS */

Las props son la forma que tiene React para pasar parámetros de un componente superior a sus children.
Las props controlan los cambios de estados de la aplicación.
Son reutilizables.
Una prop puede ser una función.
(Las props se escriben en JSX de la misma forma que se escriben los atributos en html (placeholder, class, id, etc.))
Las props tienen que ser nombres representativos.
Las propiedades de css se escriben con camelCase, por ej: margin-top --->css ----  marginTop --->react

Componente contenedor va contener componentes de presentación u otros contenedores.
Tienen como propósito encapsular a otros componentes y proporcionarles las propiedades que necesitan.
Son los encargados de realizar las llamadas a las API´s externas.


CHILDREN





/*    CLASE 5     COMPONENTES II */




/* ESTADO */

Hooks ---> Son funciones que nos provee React para cubrir nuestras necesidades de estado.
SIEMPRE devuelven un array con 2 elementos: el 1er elemento corresponde al valor que estoy guardando, y el 2do elemento corresponde a la función que cambia al estado o actualiza (renderiza). Por ej: const [coun, setCount] = useState[0] ---> Se utiliza la desestructuración de array para asignarle nombres a los elementos.
Todos los hooks comienza con el prefijo "use" ---> Ej 'estado': { useState }

El hook "useState" (que también es una función) se utiliza para cubrir la necesidad de estado de React.


*Los parámetros no tienen palabras reservadas. Son "declaraciones de variables"*

/* CICLOS DE VIDA */

Se refiere a los distintos estados en los que se va transformando un componente. Por ejemplo hago click en un objeto, me lleva a una página aparte donde solo tengo ese producto y un contador para los cambios de estado, luego vuelvo a la página principal, destruyendo ese último estado.
Montaje - Actualización - Desmontaje


/* useEffect */

La función useEffect, es un hook (función) que se utiliza para que el código dentro de ésta función se ejecute después del 'return'.
useEffect(() => {
    console.log("El código se va ejecutar despues del 'return'")
})

Recibe dos argumentos.. el 1ro es una función (bloque de código) y el 2do argumento es una array de dependencia vacío.
Y para que no se ejecute el código dos veces, se le coloca un array de dependencias vacío, pasado cómo argumento. El array va determinar cuando debo ejectur la función. Si el array esta vacío significa que se tiene que ejecutar solamente al montar el componente (una sola vez).
Esto sirve para que se ejecute sólo una vez. Por ejemplo para un llamado a una api donde recibo muchas imagenes y texto, lo hago para que lo llame sólo una vez y no cada vez que se actualize la pag.

useEffect(() => {
    console.log("El código se va ejecutar despues del 'return'")
}, [])



/* CLASE 6 PROMISES, ASINCRONÍA Y MAP */




Funciones callstack --> funciones que se ejecutan de a una. Se ejecuta y retorna un resultado.
Funciones asíncronas --> funciones que se ejecutan en paralelo a la función callstack.

Una Promise es un objeto que permite representar y seguir el ciclo de vida de una función.
Sus estados son: pendiente --> fullfilled || rejected

setTimeout() => {} => se utiliza para setear un retardo.

const irme = () => {
    return "me fui"
}

const haciendoAlgo = () => {
    return new Promise ((resolve, reject) => {
        secTimeout(() => {
            //resolve("algo va pasar")
            reject("No va pasar nada")
        }, 3000)
    })
}

haciendoAlgo().then(result => {
    console.log(result)
}, error => {
    throw new Error("Se generó un error")
    console.log(error)
}).catch(error => {
    console.log(error)
})

/*.catch(error => {
    console.log(error)*/
}).finally(() => {
    console.log(irme())
})



/* la prop "key" va SIEMPRE SIEMPRE dentro del .map y sirve para identificar sus id... solo se utiliza para los listados, div, etc.*/




/* CLASE 7 API */

Conexiones " Web Socket" ---> como la que tiene Binance cuando muestran los valores de las monedas y sus cambios constantes.

(código de estado)
Status code = 200 ---> Significa que todo funcionó bien.
Status code = 404 ---> Error

URL params/segment

https://myapp.coder/student/1234/courses ---> a través de las "/" busco la carpeta que ya sé que existe y me lleva directo.

Fetch

cors ---> La api no nos permite obtener datos desde otro origen.


/* CLASE 8 ROUTING */

ROUTING
 















