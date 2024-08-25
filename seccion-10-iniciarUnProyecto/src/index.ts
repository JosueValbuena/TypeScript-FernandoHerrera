//metodo de importacion individual
//import { Hero, Hero2 } from "./classes/Hero";

//metodo de importacion individual con alias
//import { Hero as AliasHero } from "./classes/Hero";

//metodo de importacion grupal
import * as HeroClasses from "./classes/Hero";

import powerList, { Power } from "./powers/powers";

console.log('Hola Mundo!');

//const ironMan = new Hero('Iron man', 'superSuit', 45);

//const ironMan = new AliasHero('Iron man', 'superSuit', 45);

const ironMan = new HeroClasses.Hero('Iron man', 1, 45);

console.log({ ironMan });
console.log(ironMan.power);
console.log(powerList[1]);




