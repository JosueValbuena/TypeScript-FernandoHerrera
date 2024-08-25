"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
(() => {
    const avengers = {
        nick: 'Samuel L. Jackson',
        ironMan: 'Rober Downey Jr.',
        vision: 'Paul Bettany',
        activo: true,
        poder: 1500.345
    };
    const { poder, vision } = avengers;
    console.log(poder.toFixed(2), vision.toUpperCase());
    const printAvenger = (_a) => {
        var { ironMan } = _a, restArgs = __rest(_a, ["ironMan"]);
        console.log(ironMan, restArgs);
    };
    printAvenger(avengers);
    const avengersArr = ['Cap. America', true, 156.3434];
    const [nombre, vive, poderVengador] = avengersArr;
    console.log({ nombre, vive });
})();
(() => {
    const blackWidow = {
        name: 'Natasha Romanof',
        weapon: 'guns',
        power: 150,
        alive: false
    };
    const antMan = {
        name: 'Scott Lang',
        weapon: 'suit',
        power: 200,
        alive: true
    };
    const winterSoldier = {
        name: 'James Buchanan',
        weapon: 'Adamntiun Arm',
        power: 300,
        alive: true
    };
    const avengersArr = [blackWidow, antMan, winterSoldier];
    for (const avenger of avengersArr) {
        console.log(avenger.name, avenger.alive, avenger.power);
    }
    let funcion = () => { };
})();
(() => {
    const a = 'Fernando';
    console.log(a);
})();
//# sourceMappingURL=index.js.map