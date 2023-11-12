// 元组

let tupleType: [string, boolean];
tupleType = ['123', true]

function echo<T>(arg:T):T{
  return arg;
}

const res1=echo('str')
const res2=echo(123)

function swap<T, U>(tuple: [T, U]):[U, T]{
  return [tuple[1],tuple[0]]
}

const res3=swap(['str',123]);

interface GithubRes {
  name:string,
  count:number
}

function withAPI<T>(url:string):Promise<T>{
  return fetch(url).then(res=>res.json())
}

withAPI<GithubRes>('').then(res=>{
  console.log(res.name);
  
})


// 枚举

// 数字类枚举 - 默认从0开始，依次递增
enum Score {
  BAD,
  NG,
  GOOD,
  PERFECT
}

let score: Score = Score.BAD;

// 反向映射
enum Enum1 {
  A,
  B,
  C
}

let enumName = Enum1[0]; // A
let enumVal = Enum1['B']; // 1

// 异构
enum Enum2 {
  A,
  B,
  C = 'C',
  D = 'D',
  E = 6,
  F
}

let enumF = Enum2['F']; // 7