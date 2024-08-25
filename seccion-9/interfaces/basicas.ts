(() => {

    interface Hero {
        name: string,
        age: number,
        powers: string[],
        getName?: () => string
    }

    let flash: Hero = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super Velocidad', 'Viajar en el tiempo']
    }

    let superMan: Hero = {
        name: 'Clart Kent',
        age: 30,
        powers: ['Super Fuerza', 'Volar'],
        getName() {
            return this.name
        }
    };
})();