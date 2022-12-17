CLASE 2

/*   Comandos    */

npm install -g create-react-app proyecto_react ---> Se instala React js local
npm start ---> Se utiliza en la carpeta donde se encuentra el archivo package.json

CLASE 3

Node.js es un entorno de ejecución

         -----

const num = [1, 2, 3, 4]

/* Spread operator "..."  */

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

const persona = {
    name: "carlos",
    age: 14
}

const {name} = persona

console.log(name) ---> "carlos"

    ------






