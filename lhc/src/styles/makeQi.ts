
interface ICustomStyles {
  [key: string]: string
}

function makeProxy(classNames: string[]) {
  return {
    get(config: ICustomStyles, property: string): any {
      if (property === 'str') {
        return () => classNames.join(' ')
      }
      if (!config[property]) {
        return new Proxy(config, makeProxy([...classNames, property]))
      }
      return new Proxy({}, makeProxy([...classNames, config[property]]))
    },
  }
}

export function makeQi<C extends ICustomStyles>(config?: C) {
  return new Proxy(config || {}, makeProxy([])) as any as IModule<keyof C extends string ? C : {}>
}



/**
 * ================= This is for go to tailwind components =================
 */
type Distance = 0.5 | 1 | 1.5 | 2 | 2.5 | 3 | 3.5 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
type Breakpoints = 'xs:' | 'sm:' | 'md:' | 'lg:' | 'xl:' | '';
type Space = `${Breakpoints}space-${'x' | 'y'}-${Distance}`;
type TextSize = `${Breakpoints}text-${1 | 2 | 3}${'lg' | 'xl'}`;
type TextColor = `${Breakpoints}text-${'gray' | 'red' | 'yellow' | 'green' | 'blue' | 'indigo' | 'purple' | 'pink'}-${100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900}`;
type Tracking = 'tracking-tight'
type Font = `${Breakpoints}font-${'sans' | 'serif' | 'mono' | 'bold'}`;
  
type IModule<C extends ICustomStyles> = {
  [key in (keyof C) | Space | TextSize | TextColor | Tracking | Font]: IModule<C>
} & {
  str: () => string
}