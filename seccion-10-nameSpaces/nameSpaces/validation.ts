namespace Validations {
    export const validateText = (text: string): boolean => {
        return text.length > 3;
    };

    export const validateDate = (myDate: Date): boolean => {
        return (!isNaN(myDate.valueOf()));
    };
};

console.log(Validations.validateText('hol'), Validations.validateDate(new Date('2024-04-24')));