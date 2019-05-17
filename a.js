// class Student {
// //     fullName: string;
// //     constructor(public firstName, public middleInitial, public lastName) {
// //         this.fullName = firstName + " " + middleInitial + " " + lastName;
// //     }
// // }
// //
// // interface Person {
// //     firstName: string;
// //     lastName: string;
// // }
// //
// // function greeter(person : Person) {
// //     return "Hello, " + person.firstName + " " + person.lastName;
// // }
// //
// // let user = new Student("Jane", "M.", "User");
// //
// // document.body.innerHTML = greeter(user);
// class Animal {
//     private name: string;
//
//     constructor(theName: string) {
//         this.name = theName;
//     }
// }
//
// let a = new Animal('Cat').name; //错误，‘name’是私有的
// class Animal {
//     protected name: string;
//
//     constructor(theName: string) {
//         this.name = theName;
//     }
// }
//
// class Rhino extends Animal {
//     constructor() {
//         super('Rhino');
//     }
//     getName() {
//         console.log(this.name) //此处的name就是Animal类中的name
//     }
// }
/*private protected public static*/
// class Person {
//     protected name: string;
//     protected constructor(theName: string) {
//         this.name = theName;
//     }
// }
//
// //Rhino能够继承Animal
// /*private
// 使用private标识的成员变量,不允许在本类之外的地方使用.*/
// /*protected可以在本类及其子类中访问*/
// /*static
// 使用静态变量或方法可以使用类别.方法名或类别.变量名的方式使用*/
// class Rhino extends Person {
//     private food: string;
//     static name1:string = 'Tom';
//     constructor(name: string, food: string) {
//         super(name);
//         this.food = food;
//
//
//
//     }
//     static foo(){
//         console.log("foo");
//     }
// }
//
// let rhino = new Rhino('zhao', 'banana');
// console.log(new Rhino('zhao1', 'banana1'));
// console.log(Rhino);
//
// // class MyClass{
// //     static name1:string = 'Tom';
// //     constructor(){
// //
// //     }
// //     static foo(){
// //         console.log("foo");
// //     }
// // }
//
// Rhino.foo();
//Boolean
var isDone = false;
//Number
var width = 100;
//String
var name_ = "hello";
//Array
var list = [1, 2, 3];
var list = [1, 2, 3];
//Enum
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 4] = "Blue";
})(Color || (Color = {}));
var c = Color.Red;
console.log(Color);
// alert(c);//默认值从0开始，alert(0);
//可以手动指定值
// enum Color1 {Red = 1, Green, Blue}
// var c1: Color1 = Color1.Green;
// alert(c1);//alert(2)
// //根据值查找名称
// enum Color2 {Red = 1, Green=2, Blue=4}
// var c2: string = Color2[4];
// alert(c2);//alert(Blue)
//空白 any 用于控制函数返回值得数据类型
// function warnUser(): any {
//     // alert(123);
//     return 'a'
// }
// console.log(warnUser());
/*元组类型 tuple*/
// let x: [string,number];
// x = ['Angular',5]; //正确
// x = [5,'Angular']; //报错
// get  set  ************tsc -t es5 a************
// class Person {
//     constructor() {
//     }
//     private _name: string;
//
//     public get name() {
//         return this._name;
//     }
//
//     public set name(name: string) {
//         this._name = name;
//     }
// }
//
// let person = new Person();
//
// // person._name = "apple";  // 无法访问到_name变量
// person.name = "apple";
// console.log(person.name);  // 输出 apple
//
// interface iCar {
//     color : String
//     // safetyDevice?:any//实现无需实现
// }
// function movecar(car : iCar) {
//     if (car){
//         console.log(111111)
//     }else{
//         console.log(2222222)
//     }
// }
//
// movecar({'color':'dw'});
// ?????????????
// module MyDemo {
//     export interface IDemo {
//
//     }
//     export class Demo implements IDemo{
//
//     }
// }
// get set 选择器
// var age = 18;
// var test = {
//     get age (){
//         return age;
//     },
//     set age (value){
//         if(value > 100) age= new Date().getFullYear() - value;
//         else age = value;
//     }
// };
//
// test.age = 1994;
// console.log(test.age);
var adddd = {
    dd: {
        a: [2, 3, 4]
    }
};
console.log(adddd.dd.a);
// function a() {
//     var a_ = 1;
//     return function () {
//         console.log(a_);
//         return a_ ++
//     }
// }
// a()();
console.log(222);
var setData = function (value1, value2) {
    return value1 + value2;
};
console.log(setData('张三', '18'));
