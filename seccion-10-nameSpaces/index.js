"use strict";
var Validations;
(function (Validations) {
    Validations.validateText = (text) => {
        return text.length > 3;
    };
    Validations.validateDate = (myDate) => {
        return (!isNaN(myDate.valueOf()));
    };
})(Validations || (Validations = {}));
;
console.log(Validations.validateText('hol'), Validations.validateDate(new Date('2024-04-24')));
//# sourceMappingURL=index.js.map