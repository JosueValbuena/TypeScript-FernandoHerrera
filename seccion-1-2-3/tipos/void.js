"use strict";
(() => {
    function callBatman() {
        return;
    }
    ;
    function callSuperman() {
        return 1;
    }
    ;
    const callAquaman = () => {
        return;
    };
    const a = callBatman();
    const b = callSuperman();
    const c = callAquaman();
    console.log(a);
    console.log(b);
    console.log(c);
})();
