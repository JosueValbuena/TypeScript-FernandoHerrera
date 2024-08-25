(() => {

    interface User {
        full_name: string;
        age: number;
    }

    interface Address {
        city: string;
        street_name: string;
        street_number: number;
    }

    interface Products {
        name: string;
        qty: number;
    }

    interface Card {
        products: Products[];
        addCart(product_id: string): void
    }

    class ShoppingCard implements User, Address, Card {

        public full_name: string;
        public age: number;
        public city: string;
        public street_name: string;
        public street_number: number;
        public products: Products[]

        constructor(
            full_name: string,
            age: number,
            city: string,
            street_name: string,
            street_number: number,
            products: Products[]
        ) {
            this.full_name = full_name;
            this.age = age;
            this.city = city;
            this.street_name = street_name;
            this.street_number = street_number;
            this.products = products;
        };

        /* || sintaxis mas corta*/

        /* constructor(
            public full_name: string,
            public age: number,
            public city: string,
            public street_name: string,
            public street_numer: number,
            public products: Products[]
        ) { } */

        addCart(product_id: string): void {
            return console.log('agregado unidad extra al producto id: ', product_id)
        };

    };

})();