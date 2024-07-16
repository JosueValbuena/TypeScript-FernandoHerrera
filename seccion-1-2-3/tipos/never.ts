(() => {

    const error = (message: string): never => {
        throw new Error(message);
    };

    const errorTwo = (message: string): (never | number) => {
        if (true) {
            throw new Error(message);
        };

        return 1
    };

    error('Auxilio');
    console.log('Hola mundo');

})();