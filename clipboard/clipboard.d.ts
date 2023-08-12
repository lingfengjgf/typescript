type ClipboardJSEvent = {
  action:string,
  text:string,
  trigger:HTMLElement,
  clearSelection:()=>void
}

declare class ClipboardJS {
  constructor(selector:string)
  on(type:'success'|'error',callback:(e:ClipboardJSEvent)=>void):this;
  distory():void;
}

export = ClipboardJS