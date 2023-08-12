interface Person{
  name:string,
  age?:number
}

let Bob:Person={
  name:'Bob',
  age:20
}

interface ISum{
  (x:number,y:number):number
}

const sum:ISum=(x,y)=>x+y

interface RandomMap{
  [propName:string]:string
}

const test:RandomMap={
  a:'a',
  b:'b'
}

// 类数组
interface LikeArray{
  [index:number]:string
}

const likeArray:LikeArray=['1','2'];