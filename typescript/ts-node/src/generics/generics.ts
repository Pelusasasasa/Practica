export const printObject = ( argumnet: any) => {
    console.log(argumnet);
};

export function genericFunction<T>(argument: T):T {
    return argument
};

export const genericFunctionArrow = <T>(argumnet: T) => argumnet;