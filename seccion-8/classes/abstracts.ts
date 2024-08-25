(() => {

    abstract class Mutant {
        constructor(
            public name: string,
            public age: number
        ) { }
    };

    class Xmen extends Mutant {

        salvarElMundo() {
            return 'Mundo salvado'
        };

    };

    class Villian extends Mutant {

        destruirElMundo() {
            return 'Mundo destruido'
        };

    };

    const wolverine: Xmen = new Xmen('Wolverine', 40);
    console.log(wolverine.salvarElMundo());

    const getName = (character: Mutant): void => {
        return console.log('nombre del caracter :', character.name)
    };

    getName(wolverine);
})();