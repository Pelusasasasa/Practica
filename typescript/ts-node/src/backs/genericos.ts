import { genericFunction, genericFunctionArrow, printObject } from "../generics/generics";
import { Hero, Villian } from "../interfaces/index";
// printObject('Hola');
// printObject(new Date());
// printObject({a:1, b:2});
// printObject([1,2,3,4,5,6]);
// printObject(123);

// console.log(genericFunctionArrow(3.141618).toFixed(2));
// console.log(genericFunctionArrow('Hola Mundo').toUpperCase());
// console.log(genericFunctionArrow(new Date()).getDate());

const deadpool = {
    name: 'Deadpool',
    realName: 'wade Winston Wilson',
    dangerLevel: 130
};

console.log(genericFunctionArrow<Villian >(deadpool).dangerLevel);