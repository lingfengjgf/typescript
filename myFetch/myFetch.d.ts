type HttpMethod = 'GET' | 'POST' | 'DELETE';

declare function myFetch<T=any>(url:string,method:HttpMethod,data?:any) : Promise<T>

declare namespace myFetch {
  const get:<T = any>(url:string) => Promise<T>;
  const post:<T = any>(url:string, data:any) => Promise<T>;
}

export = myFetch;