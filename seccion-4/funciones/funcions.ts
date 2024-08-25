(() => {
    const hero: string = 'flash';

    function returnName(): string {
        return hero;
    };

    const activateBatisignal = (): string => {
        return 'Batisenhal activdad!';
    };

    console.log(typeof activateBatisignal);

    const heroName = returnName();
})();