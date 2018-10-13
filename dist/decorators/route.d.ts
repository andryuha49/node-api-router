import { methods } from '../enums/methods';
export declare function route(matcher: string, method?: methods | Function, ...middleware: any[]): (target: any, key: any, descriptor: any) => void;
