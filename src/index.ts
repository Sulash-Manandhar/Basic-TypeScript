//Basic Types
let id: number = 5
let company: string = 'MeInRealLife'
let isPublished: boolean = true
let x:any = "Hello"
let age: number

age = 12
x = true //data type can be changed

console.log("ID:",id)

//array that only contain number
let ids: number[] = [1,2,3,4,5]

//array of different data type
let arr:any[] = [1,true,"Hello"]

//Tuple (order is important)
let person: [number, string, boolean] = [1, 'Sulash', false]

let employee: [number, string][]

employee = [
    [1,"Sulash"],
    [2,"Jenifer"],
    [3,"Bety"]
]

//Union
let pid: string | number

pid = "22"
pid = 12

//Enum
enum Direction1 {
    Up = 1,
    Down,
    Right,
    Left
}

enum Direction2 {
    Up = "Up",
    Down = "Down",
    Right = "Right",
    Left = "Left"
}


//Objects
type User = {
    id: number,
    name: string,
}

const user: User= {
    id: 1,
    name: 'Jhon'
}

//Type Assertion
let cid: any = 1
// let customerId = <number>cid

let customerId = cid as number


//Funtion
//function with return type number
function addNum(x:number,y:number): number {
    return x + y
}

console.log("Sum:",addNum(1,3))


//function with no return type
function log(message: string | number): void{
    console.log(message)
}

//Interface
interface UserInterface {
    readonly id: number, //readonly property
    name: string,
    age?:number  //option value defined
}

const user1: UserInterface= {
    id: 1,
    name: 'Jhon'
}


//difference between interface and type
//interface cannot be used with union but type can
type Point = number | string //this thing cannot be dont with interface


//arrow function with interface
interface MathFunc {
    (x:number, y:number):number
}
const add: MathFunc = (x:number, y:number):number => x + y
const sub: MathFunc = (x:number, y:number):number => x - y

//Classes

//used to create objects
class Person {
    id:number //public by default, (private, protecteed)
    name: string

    //runs when instance is created 
    constructor(id:number, name:string) {
        this.id = id //current instance 
        this.name = name
    }

    register(){
        return `${this.name} is now registered`
    }
}


const sulash = new Person (1,'Sulash Manandhar')
const ketyy = new Person (2,'Ketty Perry')

console.log(sulash,ketyy)
console.log(sulash, sulash.register())


//Interface and classes
interface PersonInterface {
    id: number, //readonly property
    name: string,
    register(): string //method returns string
}

//used to create objects
class Person1 implements PersonInterface {
    id:number //public by default, (private, protecteed)
    name: string

    //runs when instance is created 
    constructor(id:number, name:string) {
        this.id = id //current instance 
        this.name = name
    }

    register(){
        return `${this.name} is now registered`
    }
}

class Employee extends Person1 {
    position: string
    constructor(id:number, name:string, position:string){
        super(id,name);    
        this.position = position;
    }
}

const emp = new Employee(7,'Jughead', 'Developer')
console.log(emp.register())

//Generics
// generic helps to define a placeholder, meaning it will look for same type of data type rather than mix data type
function getArray<T>(items:T[]): T[]{
    return new Array().concat(items)
}

let numArray = getArray<number>([1,2,3,4,5])
let strArray = getArray<string>(["Jhon","Suash","Jimmy"])

console.log(numArray)


