(() => {

    const addNumbers = (a: number, b: number) => a + b;
    const greet = (name: string) => `Saludos ${name}`;
    const worldSaved = () => `El mundo esta salvado`;

    let myFunction: (a: number, b: number) => number;
    let myFunction2: (a: string) => string;
    let myFunction3: () => string;

    myFunction = addNumbers;
    console.log(myFunction(1, 2));

    myFunction2 = greet;
    console.log(myFunction2('Josue'));

    myFunction3 = worldSaved;
    console.log(myFunction3());

})();