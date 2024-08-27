//metodo de importacion individual
//import { Hero, Hero2 } from "./classes/Hero";

//metodo de importacion individual con alias
//import { Hero as AliasHero } from "./classes/Hero";

//metodo de importacion grupal
import * as HeroClasses from "./classes/Hero";

import powerList, { Power } from "./powers/powers";

import { validateArgumentArrowFunction, validateArgumentClasicFunction } from "./generics/generics";
import { Hero, Villian } from "./interfaces";
import { getPokemon } from "./generics/get-pokemons";

/* import { Hero } from "./interfaces/Hero";
import { Villian } from "./interfaces/Villian"; */


console.log('Hola Mundo!');

//const ironMan = new Hero('Iron man', 'superSuit', 45);

//const ironMan = new AliasHero('Iron man', 'superSuit', 45);

const ironMan = new HeroClasses.Hero('Iron man', 1, 45);

console.log({ ironMan });
console.log(ironMan.power);
console.log(powerList[1]);


console.log(validateArgumentArrowFunction('Hola').toLocaleUpperCase());
console.log(validateArgumentArrowFunction(12345).toString());

console.log(validateArgumentClasicFunction('Hola').toLocaleUpperCase());
console.log(validateArgumentClasicFunction(12345).toString());

const deadPool = {
    name: 'Dead Pool',
    realName: 'Wade Wilson',
    dangerLevel: 100
};

console.log(validateArgumentArrowFunction<Hero>(deadPool).name);
console.log(validateArgumentArrowFunction<Villian>(deadPool).dangerLevel);

getPokemon(4)
    .then(resp => console.log(resp))
    .catch(error => console.log(error))
    .finally(() => console.log('Pokemon!'));