function loggingIdentity<T>(arg: T[]): T[]{
    console.log(arg.length);  // Error: T doesn't have .length
    return arg;
}

function loggingIdentity1<T>(arg: Array<T>): Array<T> {
    console.log(arg.length);  // Array has a .length, so no more error
    return arg;
}

interface Lengthwise {
    length: number;
}

function loggingIdentity2<T extends Lengthwise>(arg: T): T {
    console.log(arg.length);  // Now we know it has a .length property, so no more error
    return arg;
}


function getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}

let x = { a: 1, b: 2, c: 3, d: 4 };

getProperty(x, "a"); // okay
// getProperty(x, "m")

function create<T>(c: {new(): T; }): T {
    return new c();
}

class BeeKeeper {
    hasMask: boolean;
}

class ZooKeeper {
    nametag: string;
    hhh(){
        console.log('123456www')
    }
}

class Animal {
    numLegs: number;
}

// 属于泛型里面使用类类型
class Bee extends Animal {
    keeper: BeeKeeper;
}
console.log(new Bee().keeper,'kkkkk');

class aaa {
    t = 1
}
console.log(new aaa().t);

class Lion extends Animal {
    keeper: ZooKeeper;
}

function createInstance<A extends Animal>(c: {new () : A}): A {
    return new c();
}
// console.log(createInstance(Lion).keeper.nametag);
console.log(create(Lion));
console.log(createInstance(Lion).keeper, 9999);  // typechecks!
createInstance(Bee).keeper;   // typechecks!


//声明一个泛型类型的函数https://www.jianshu.com/p/7ccd1814da69
function Hello<T>(arg:T):T {
    return arg;
}

//声明一个方法该方法引用上面的泛型类型的函数
var myHello:<K>(arg:K) => K = Hello;

console.log(myHello('hello Joh'),'00000222');




