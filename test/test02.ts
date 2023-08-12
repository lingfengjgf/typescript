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