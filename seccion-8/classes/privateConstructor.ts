(() => {

    class Apocalipse {

        static instance: Apocalipse;

        private constructor(
            public name: string
        ) { };

        static callApocalipse(): Apocalipse {
            if (!Apocalipse.instance) {
                return Apocalipse.instance = new Apocalipse('Soy Apocalipsis');
            };
            return Apocalipse.instance
        };

        changeName(newName: string): void {
            this.name = newName
        };

    };

    const apocalipse = Apocalipse.callApocalipse();
    console.log(apocalipse);
    apocalipse.changeName('no soy apocalipsis');
    console.log(apocalipse);
})();