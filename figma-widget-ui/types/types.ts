export {};

declare global {
  namespace NodeJS {
    interface Global {
      figma: any
    }
  }
}