"use strict";
(() => {
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super Velocidad', 'Viajar en el tiempo']
    };
    let superMan = {
        name: 'Clart Kent',
        age: 30,
        powers: ['Super Fuerza', 'Volar']
    };
    let myCustomVariable = 'Esta variable es un texto';
    console.log(typeof myCustomVariable);
    myCustomVariable = 509;
    console.log(typeof myCustomVariable);
    myCustomVariable = {
        name: 'Bruce',
        age: 45,
        powers: ['Inteligencia', 'Luchador habil']
    };
    console.log(typeof myCustomVariable);
})();
