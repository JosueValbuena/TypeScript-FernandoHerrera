(() => {
    function callBatman(): void {
        return
    };

    function callSuperman() {
        return 1
    };

    const callAquaman = (): void => {
        return
    };

    const a = callBatman();
    const b = callSuperman();
    const c = callAquaman();

    console.log(a);
    console.log(b);
    console.log(c);
})();