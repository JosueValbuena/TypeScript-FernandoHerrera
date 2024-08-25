(() => {

    class Avenger {

        //regular sintax

        /* private name: string;
        private team: string;
        public realName?: string;
        static age: number = 35;

        constructor(name: string, team: string, realName?: string) {
            this.name = name;
            this.team = team;
            this.realName = realName
        }; */

        //angular sintax

        static age: number = 35;
        static getName(): string {
            return this.name
        };

        constructor(
            private name: string,
            private team: string,
            public realName?: string,
        ) { }

        public bio() {
            return `${this.name} (${this.team})`
        };

        get fullName() {
            return this.name;
        };

        set fullName(name: string) {
            this.name = name;
        }
    };

    class Xmen extends Avenger {

        constructor(
            name: string,
            realName: string,
            public mutant: boolean
        ) {
            super(name, realName);
            //console.log('Constructor de Xmen llamado');
        }

        getXmenFullName() {
            //return console.log(super.bio());
        };
    };

    const antMant = new Avenger('AntMant', 'Team Cap');
    //console.log(antMant, antMant.bio(), Avenger.getName());
    const wolverine = new Xmen('Wolverine', 'logan', true);
    wolverine.getXmenFullName();
    antMant.fullName = 'Lang Scott';
    //console.log(antMant.fullName);
})();