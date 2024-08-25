(() => {
    //objects
    type Avengers = {
        nick: string;
        ironMan: string;
        vision: string;
        activo: boolean;
        poder: number;
    }

    const avengers: Avengers = {
        nick: 'Samuel L. Jackson',
        ironMan: 'Rober Downey Jr.',
        vision: 'Paul Bettany',
        activo: true,
        poder: 1500.345
    };

    const { poder, vision } = avengers;

    console.log(poder.toFixed(2), vision.toUpperCase());

    const printAvenger = ({ ironMan, ...restArgs }: Avengers): void => {
        console.log(ironMan, restArgs);
    };

    printAvenger(avengers);

    //Array

    const avengersArr: [string, boolean, number] = ['Cap. America', true, 156.3434];

    const [nombre, vive, poderVengador] = avengersArr;

    console.log({ nombre, vive });
})();