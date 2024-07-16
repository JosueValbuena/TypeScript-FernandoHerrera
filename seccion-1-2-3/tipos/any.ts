(() => {
    let avengers: any = 123;
    let exist;
    let power;

    avengers = 'Dr Strange';
    //console.log(avengers.charAt(0));
    console.log((avengers as string).charAt(0));

    avengers = 300.13123123;

    console.log(<number>avengers.toFixed(2));

    console.log(exist);
    console.log(power);
})();