class Animal{
  protected name:string;
  private age:number;
  constructor(name:string,age:number){
    this.name=name;
    this.age=age;
  }
  public getAge(){
    console.log(`${this.name} is ${this.age} years old!`);
  }
}

class Dog extends Animal{
  run(){
    console.log(`${this.name} is running!`);
  }
}

const snake=new Animal('lily',3);
snake.getAge();

interface ClockInterface{
  currentTime:number,
  alert():void
}

class clock implements ClockInterface {
  currentTime: number=123;
  alert(): void {
      
  }
}

interface GameInterface {
  play():void;
}

interface GameStatic {
  new (name:string):void
}

const phone:GameStatic = class CellPhone implements ClockInterface, GameInterface {
  constructor(name:string){

  }
  currentTime: number=456;
  alert(): void {
      
  }
  play(): void {
      
  }
}

// any | unknow

// any - 绕过所有类型检测 => 所有的类型检测和编译筛查全部失效
let anyVal: any = 123;
anyVal = 'any';
let val1:string = anyVal;

// unknow - 绕过赋值检测 => 禁止更改传递
let unknowVal: unknown;
unknowVal = '123';
unknowVal = true;

let val2: unknown = unknowVal;
let val3: any = unknowVal;
// let val4: boolean = unknowVal;  // 报错

// void | never

// void - 声明函数的返回值为空
function voidFn(): void {
  console.log('void');
}

// never - 永不返回 或 永远抛出 error
function longlongloop(): never {
  while(true) {}
}

function errorFn(msg: string): never {
  throw new Error(msg)
}


// readonly | const
const arr1 = [1, { num: 2 }, '3'];

arr1[0] = 11;
typeof arr1[1] === 'object' && (arr1[1].num = 22);
arr1.length = 4;
arr1.push(4);
// arr1 = [] // 报错

let arr2: ReadonlyArray< string | number | object > = [1, { num: 2 }, '3'];
// arr2[0] = 11; // 报错
// typeof arr2[1] === 'object' && (arr2[1].num= 22); // 报错

// arr2.length = 4; // 报错
// arr2.push(4);// 报错
arr2 = [] // 可以将常规Array类型值赋值给ReadonlyArray类型
// arr1 = arr2 //不能将ReadonlyArray类型分配给Array类型

interface Class {
  readonly name: string,
  readonly info: object,
  time: number,
  score: object
}


let Lilei: Class = {
  name: 'Lilei',
  info: {
    sex:'男',
    age:'20'
  },
  time:2,
  score: {Chinese: 80, Math: 90}
}

// Lilei.name = 'Hmm'; // 报错
// Lilei.info.age= '10'; // 报错
Lilei.time = 3;
// Lilei.score.Chinese = 90;
