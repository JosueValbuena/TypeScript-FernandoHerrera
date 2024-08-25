(() => {
    type Avenger = {
        name: string,
        weapon: string,
        power: number,
        alive: boolean
    };

    const blackWidow: Avenger = {
        name: 'Natasha Romanof',
        weapon: 'guns',
        power: 150,
        alive: false
    };

    const antMan: Avenger = {
        name: 'Scott Lang',
        weapon: 'suit',
        power: 200,
        alive: true
    };

    const winterSoldier: Avenger = {
        name: 'James Buchanan',
        weapon: 'Adamntiun Arm',
        power: 300,
        alive: true
    };

    const avengersArr: Avenger[] = [blackWidow, antMan, winterSoldier];

    for (const avenger of avengersArr) {
        console.log(avenger.name, avenger.alive, avenger.power)
    }

    let funcion = () => {}
})();