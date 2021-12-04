let clientes = ['brandon', 'Alo', 'Booster'];
let empleados = ['Jonathan', 'Edu', 'Pelusa'];
console.log(clientes.concat(empleados));

console.log('En esta parte muestro concat para unir 2 arrays')
console.log('----------------------------------Parte 2');
var numbers = [5, 32, 43, 4];

var numbers2 = numbers.filter(function(n) { return n % 2 !== 0; });
console.log(numbers2);
console.log('Los valores que tiene que regresar son los que no sean pares. El filter sirvio para retornar los valores filtrados');
console.log('------------------------------Parte 3');
var people = [{
    id: 1,
    name: "John",
    age: 28
}, {
    id: 2,
    name: "Jane",
    age: 31
}, {
    id: 3,
    name: "Peter",
    age: 55
}, {
    id: 2,
    name: "Jane",
    age: 16
}];

function edadFilter() {
    let mayor = people.filter(may => may.age > people.age);
    return mayor;
}

function edadIf() {
    var mayor = 0;
    for (var i = 0; i < people.length; i++) {
        if (mayor < people[i].age) {
            mayor = people[i].age;



        }


    }

    return mayor;

}
console.log(edadIf());
console.log(edadFilter());


console.log('------------------------------Parte 4');

function elArray() {
    let people = [{ name: 'bob', id: 1 }, { name: 'john', id: 2 }, { name: 'alex', id: 3 }, { name: 'john', id: 3 }];
    let arreglo = people.filter(arreglo => arreglo.name);

    console.log(arreglo);
    return arreglo;
}
console.log(elArray());
console.log('---------------------------- Parte 5');

var myArray = [1, 2, 3, 4];

function array2() {
    var max = 0;
    var min = myArray[0];
    for (var i = 0; i < myArray.length; i++) {
        if (max < myArray[i]) {
            max = myArray[i];

        }
        if (min > myArray[i]) {
            min = myArray[i];

        }


    }

    console.log('El numero minimo es: ' + min + ' y el numero maximo es: ' + max);
}
console.log(array2());
console.log('-----------------------------------------Parte 6');
var object = {
    key1: 10,
    key2: 3,
    key3: 40,
    key4: 20
};
console.log(this.key1);

function acomodar() {
    let objeto = Object.values(object);
    return objeto;
}
let numeros = acomodar();
console.log(acomodar());
console.log(numeros.sort((a, b) => a - b));