interface User {
    first_name: string;
    last_name?: string;
    age: number;
    address: Address;
    getFullAdress(id: string): string
}

interface Address {
    city: string;
    street: string;
    zip_code: string;
    house_number?: string | number;
}

const user1: User = {
    first_name: 'Juan',
    age: 30,
    address: {
        city: 'Santiago',
        street: 'Moneda',
        zip_code: '20485',
        //house_number: 50,
    },
    getFullAdress(id: string) {
        return this.address.zip_code;
    }
};