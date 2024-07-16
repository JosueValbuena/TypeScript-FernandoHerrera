"use strict";
(() => {
    const error = (message) => {
        throw new Error(message);
    };
    const errorTwo = (message) => {
        if (true) {
            throw new Error(message);
        }
        ;
        return 1;
    };
    error('Auxilio');
    console.log('Hola mundo');
})();
