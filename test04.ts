// 交叉类型
interface IName {
  name:string
}

type IPerson = IName & { age : number }

const Lily:IPerson = {
  name:'Lily',
  age:20
}

// 联合类型
type NumOrStr = number | string

// 类型断言
function getLength(input:NumOrStr){
  const str = input as string;
  if( str.length ) {
    return str.length
  } else {
    const num = input as number;
    return num.toString().length;
  }
}

type keys = keyof IPerson;

interface IWithLength {
  length:number
}

function echoWithArr<T extends IWithLength>(arg:T):T{
  console.log(arg.length);
  return arg;
}

const arrs = echoWithArr([1,2,3]);
const str = echoWithArr('123');
const obj = echoWithArr({length:3,name:'obj'})

declare var jQuery:(selector:string)=>any;
jQuery('#id')