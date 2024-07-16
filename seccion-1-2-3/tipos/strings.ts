(() => {

    const batman: string = 'Batman';
    const linternaVerde: string = "Linterna Verde";
    const volcanNegro: string = `Heroe: Volcan Negro`;
    const abc: any = 123;

    console.log(`Im ${batman}`);

    console.log(batman.toUpperCase());

    console.log(abc.toString());

    console.log(batman[10]?.toUpperCase() || "No esta presente");
})();