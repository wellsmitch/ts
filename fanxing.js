function loggingIdentity(arg) {
    console.log(arg.length); // Error: T doesn't have .length
    return arg;
}
function loggingIdentity1(arg) {
    console.log(arg.length); // Array has a .length, so no more error
    return arg;
}
function loggingIdentity2(arg) {
    console.log(arg.length); // Now we know it has a .length property, so no more error
    return arg;
}
function getProperty(obj, key) {
    return obj[key];
}
var x = { a: 1, b: 2, c: 3, d: 4 };
getProperty(x, "a"); // okay
// getProperty(x, "m")
// class BeeKeeper {
//     hasMask: boolean;
// }
// class ZooKeeper {
//     nametag: string;
// }
// class Animal {
//     numLegs: number;
// }
// class Bee extends Animal {
//     keeper: BeeKeeper;
// }
// class Lion extends Animal {
//     keeper: ZooKeeper;
// }
// function createInstance<A extends Animal>(c: new () => A): A {
//     return new c();
// }
// createInstance(Lion).keeper.nametag;  // typechecks!
// createInstance(Bee).keeper.hasMask;   // typechecks!
