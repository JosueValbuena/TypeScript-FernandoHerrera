(() => {

    const fullName = (firstName: string, ...args: string[]) => {
        return `${firstName} ${args.join(' ')}`;
    };

    const superManName = fullName('Clark', 'Joshep', 'Kent', '/', 'Kal', 'El');

    console.log({ superManName });

})();