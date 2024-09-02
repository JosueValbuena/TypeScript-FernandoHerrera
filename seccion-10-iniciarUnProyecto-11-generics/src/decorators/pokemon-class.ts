//introduccion
function printToConsole(constructor: Function) {
    console.log(constructor);
};

//factory decorator = funciones que retornan otras funciones
function printToConsoleConditional(print: boolean = false): Function {
    if (print) {
        return () => console.log('si');
    } else {
        return () => console.log('no');
    };
};

const blockPrototype = function (constructor: Function) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
};

function checkValue() {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const initialMethod = descriptor.value;

        console.log({ target, propertyKey, descriptor }, { descriptorValue: descriptor.value })

        descriptor.value = (id: number) => {

            console.log({ descriptorValue: id });

            if (id < 1 || id > 100) {
                return console.error('ID invalido');
            } else {
                return initialMethod(id);
            }
        }
    };
};

function readonly(isWritable: boolean = true): Function {
    return function (target: any, propertyKey: string) {
        const descriptor: PropertyDescriptor = {
            get() {
                console.log(this);
                return 'Fernando'
            },
            set(this, val) {
                //console.log(this, val)
                Object.defineProperty(this, propertyKey, {
                    value: val,
                    writable: !isWritable,
                    enumerable: false
                })
            }
        };

        //return descriptor;
    };
};

//decoradores para constructor
@blockPrototype
@printToConsoleConditional(false)
export class Pokemon {

    //decoradores para propiedades
    @readonly()
    public api: string = 'http//:pokeapi.co'

    constructor(
        public name: string
    ) { }

    //decoradores para metodos
    @checkValue()
    savePokemon(id: number) {
        console.log(`Pokemon ${id} guardado`);
    };
};