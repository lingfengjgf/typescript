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