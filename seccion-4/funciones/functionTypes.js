"use strict";
(() => {
    const addNumbers = (a, b) => a + b;
    const greet = (name) => `Saludos ${name}`;
    const worldSaved = () => `El mundo esta salvado`;
    let myFunction;
    let myFunction2;
    let myFunction3;
    myFunction = addNumbers;
    console.log(myFunction(1, 2));
    myFunction2 = greet;
    console.log(myFunction2('Josue'));
    myFunction3 = worldSaved;
    console.log(myFunction3());
})();
