import powerList from "../powers/powers";

export class Hero {
    constructor(
        public name: string,
        public powerID: number,
        public age: number
    ) { }

    get power(): string {
        return powerList.find(power => power.id === this.powerID)?.power || 'No encontrado'
    };
};

export class Hero2 {
    constructor(
        public name: string,
        public power: string,
        public age: number
    ) { }
};

export class Hero3 {
    constructor(
        public name: string,
        public power: string,
        public age: number
    ) { }
};