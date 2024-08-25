(() => {

    //typos
    type Hero = {
        name: string,
        age: number,
        powers: string[],
        getName?: () => string
    };

    let flash: Hero = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super Velocidad', 'Viajar en el tiempo']
    };

    let superMan: Hero = {
        name: 'Clart Kent',
        age: 30,
        powers: ['Super Fuerza', 'Volar'],
        getName() {
            return this.name
        }
    };

    let myCustomVariable: string | number | Hero = 'Esta variable es un texto';
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