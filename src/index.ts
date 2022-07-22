
 //basic types
let id: number = 5;
let name_: string = 'brad'
let boo: boolean = true
let anni: any = 5
 //Split declaration
let name2: string
name2 = "juan"
 //Union
let union: number | string = "jose"
 //array
let ids: number[] = [1,2,3,4,5,6]
 //Tuple
let ids2: [number, string] = [1,'2']
 // Tuple Array
 let names: [string,number][]
  names = [['juena',1],
           ['juan',2],
           ['juenaa',3]
        ]
 // Enum
enum tapes{
    tape1 = 'tape2',
    tape2 = 'tape3',
    tape3 = 'tape1'
}
 //Objects
type User = {
 id: number,
 name: String
}
const user: User ={
    id: 1,
    name: 'jsoe',
}

// type asertion 
 let cid: any = 1
 let pid = cid as number

 // functions 
 function multiply (x:number, y:number):number {
     return x* y 
 }

 //Interfaces, almost the same as objects or types but types can use Unions, Interfaces Cant
 interface UserInterface  {
    readonly id: number, // propierties can be readconly
    name: String
    age?: number // the question mark means its optional
   }
   const user2: UserInterface ={
       id: 1,
       name: 'jsoe',
   }
   // Function interfaces

   interface Mathi {
       (X:number, y:number):number
   }
   const addMath: Mathi = (x:number, y:number): number => x+y
   const subMath: Mathi = (x:number, y:number): number => x-y
   //Classes
   class Person{
       private id: Number // can only acces this propierty from within the class
       protected name: String //can only acces from this on extended classes 
       age:number // propierties are public by default
       constructor(id: Number, name:String, age:number){
           this.id = id
           this.name = name
           this.age = age
           
       }
       register(){
        return `${this.name} is now registered`
       }
    
   } 
   
// Interfaces can also be used on classes 
   
interface PersonInterface {
    id: number
    name: string
    register(): string
  }
  
   class Person2 implements PersonInterface {
    id: number
    name: string
  
    constructor(id: number, name: string) {
      this.id = id
      this.name = name
    }
  
    register() {
      return `${this.name} is now registered`
    }
  }
  
   const fibie = new Person (1,'Fibie Thunderman',15)
 

   //Subclasses can inherit from superclasses

   class Employee extends Person {
    position: string
  
    constructor(id: number, name: string, age:number, position: string) {
      super(id, name,age) //can be inherited from super class in this case the class is Person
      this.position = position
    }
  }
  //const emp = new Employee(3, 'Shawn', 3, 'Developer')
  
  // generics
  //T is the generic Generics works like a placeholder for future type definitions
  function getArray <T> (items: T[]): T[]{ 
    return new Array().concat(items)

  }
  let numArray = getArray<number> ([1,2,3,4]) // limits the array to be only number type
  let strArray = getArray<string> (['brad','jhun'])// limits the array to be only string type

  