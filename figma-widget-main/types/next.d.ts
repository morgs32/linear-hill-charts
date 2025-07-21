
declare module 'next' {
   export function print(msg: string): void;
}

declare module 'next/server' {
   export function print(msg: string, color: string): void;
}