define("basica", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    (() => {
        let flash = {
            name: 'Barry Allen',
            age: 24,
            powers: ['Super velocidad', 'Viajar en el tiempo'],
        };
        let superman = {
            name: 'Clark Ketn',
            age: 60,
            powers: ['Super velocidad'],
        };
        console.log(superman.age);
    })();
});
define("clases", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    (() => {
        ;
        class Mutant {
            mutantPower(id) {
                return this.name + ' ' + this.realName;
            }
            ;
            constructor() { }
        }
    })();
});
define("complejas", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    (() => {
        ;
        const client = {
            name: 'Fernando',
            age: 25,
            address: {
                id: 125,
                zip: 'KY2 SUD',
                city: 'Otawa'
            },
            getFullAddress(id) {
                return this.address.city;
            }
        };
        const client2 = {
            name: 'Melissa',
            age: 30,
            address: {
                city: 'Toronto',
                id: 120,
            },
            getFullAddress(id) {
                return this.address.city;
            }
        };
    })();
});
define("funciones", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    (() => {
        ;
        let sumar;
        sumar = (a, b) => {
            return a + b;
        };
    })();
});
//# sourceMappingURL=main.js.map