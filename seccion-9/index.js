"use strict";
const conducirBatimovil = (auto) => {
    auto.encender = true;
    auto.velocidadMaxima = 100;
    auto.acelerar();
};
const batimovil = {
    encender: false,
    velocidadMaxima: 0,
    acelerar() {
        console.log("...... gogogo!!!");
    }
};
const guason = {
    reir: true,
    comer: true,
    llorar: false
};
const reir = (guason) => {
    if (guason.reir) {
        console.log("JAJAJAJA");
    }
};
const ciudadGotica = (ciudadanos) => {
    return ciudadanos.length;
};
class Persona {
    constructor(nombre, edad, sexo, estadoCivil) {
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
        this.estadoCivil = estadoCivil;
    }
    imprimirBio() {
        console.log(`Nombre: ${this.nombre}, edad: ${this.edad}, sexo: ${this.sexo}, estado civil: ${this.estadoCivil}`);
    }
    ;
}
;
(() => {
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super Velocidad', 'Viajar en el tiempo']
    };
    let superMan = {
        name: 'Clart Kent',
        age: 30,
        powers: ['Super Fuerza', 'Volar'],
        getName() {
            return this.name;
        }
    };
})();
(() => {
    class ShoppingCard {
        constructor(full_name, age, city, street_name, street_number, products) {
            this.full_name = full_name;
            this.age = age;
            this.city = city;
            this.street_name = street_name;
            this.street_number = street_number;
            this.products = products;
        }
        ;
        addCart(product_id) {
            return console.log('agregado unidad extra al producto id: ', product_id);
        }
        ;
    }
    ;
})();
const user1 = {
    first_name: 'Juan',
    age: 30,
    address: {
        city: 'Santiago',
        street: 'Moneda',
        zip_code: '20485',
    },
    getFullAdress(id) {
        return this.address.zip_code;
    }
};
(() => {
    let functionAddNumbers;
    functionAddNumbers = (a, b) => {
        return a + b;
    };
})();
//# sourceMappingURL=index.js.map