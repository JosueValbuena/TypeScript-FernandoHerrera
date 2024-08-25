"use strict";
(() => {
    const fullName = (firstName, ...args) => {
        return `${firstName} ${args.join(' ')}`;
    };
    const superManName = fullName('Clark', 'Joshep', 'Kent', '/', 'Kal', 'El');
    console.log({ superManName });
})();
