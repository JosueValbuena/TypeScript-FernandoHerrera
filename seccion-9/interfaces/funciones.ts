(() => {

    interface AddTwoNumbersFunction {
        (a: number, b: number): number
    }

    let functionAddNumbers: AddTwoNumbersFunction;

    functionAddNumbers = (a: number, b: number) => {
        return a + b;
    };

})();