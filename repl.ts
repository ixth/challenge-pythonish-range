import { range } from './src';

declare global {
  namespace NodeJS {
    interface Global {
      range: typeof range;
    }
  }
}

global.range = range;
