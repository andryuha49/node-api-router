declare function httpOptions(matcher: string, ...middleware: any[]): (target: any, key: any, descriptor: any) => void;
declare function httpGet(matcher: string, ...middleware: any[]): (target: any, key: any, descriptor: any) => void;
declare function httpPost(matcher: string, ...middleware: any[]): (target: any, key: any, descriptor: any) => void;
declare function httpPut(matcher: string, ...middleware: any[]): (target: any, key: any, descriptor: any) => void;
declare function httpDelete(matcher: string, ...middleware: any[]): (target: any, key: any, descriptor: any) => void;
export { httpOptions, httpGet, httpPost, httpPut, httpDelete };
