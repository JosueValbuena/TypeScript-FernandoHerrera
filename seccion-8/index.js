"use strict";
(() => {
    class Mutant {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }
    ;
    class Xmen extends Mutant {
        salvarElMundo() {
            return 'Mundo salvado';
        }
        ;
    }
    ;
    class Villian extends Mutant {
        destruirElMundo() {
            return 'Mundo destruido';
        }
        ;
    }
    ;
    const wolverine = new Xmen('Wolverine', 40);
    console.log(wolverine.salvarElMundo());
    const getName = (character) => {
        return console.log('nombre del caracter :', character.name);
    };
    getName(wolverine);
})();
(() => {
    class Avenger {
        static getName() {
            return this.name;
        }
        ;
        constructor(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
        bio() {
            return `${this.name} (${this.team})`;
        }
        ;
        get fullName() {
            return this.name;
        }
        ;
        set fullName(name) {
            this.name = name;
        }
    }
    Avenger.age = 35;
    ;
    class Xmen extends Avenger {
        constructor(name, realName, mutant) {
            super(name, realName);
            this.mutant = mutant;
        }
        getXmenFullName() {
        }
        ;
    }
    ;
    const antMant = new Avenger('AntMant', 'Team Cap');
    const wolverine = new Xmen('Wolverine', 'logan', true);
    wolverine.getXmenFullName();
    antMant.fullName = 'Lang Scott';
})();
(() => {
    class Apocalipse {
        constructor(name) {
            this.name = name;
        }
        ;
        static callApocalipse() {
            if (!Apocalipse.instance) {
                return Apocalipse.instance = new Apocalipse('Soy Apocalipsis');
            }
            ;
            return Apocalipse.instance;
        }
        ;
        changeName(newName) {
            this.name = newName;
        }
        ;
    }
    ;
    const apocalipse = Apocalipse.callApocalipse();
    console.log(apocalipse);
    apocalipse.changeName('no soy apocalipsis');
    console.log(apocalipse);
})();
//# sourceMappingURL=index.js.map