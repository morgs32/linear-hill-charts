// https://github.com/jpalumickas/use-window-focus/blob/main/src/index.ts

import {
  useEffect, 
  useRef 
} from 'preact/hooks';

export const useWindowFocus = (onFocus: (...args: any[]) => any) => {
  const onFocusRef = useRef(onFocus);

  useEffect(() => {
    const onFocus = onFocusRef.current
    window.addEventListener('focus', onFocus);
    return () => {
      window.removeEventListener('focus', onFocus);
    };
  }, []);

};