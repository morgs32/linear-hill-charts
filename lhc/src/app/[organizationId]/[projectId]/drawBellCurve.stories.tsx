import { bellCurve } from './drawBellCurve';
import { hillWidth, hillHeight } from './dimensions';


export function ExampleBellCurve() {
  return (
    <svg viewBox={`0 0 ${hillWidth} ${hillHeight}`} overflow="visible" dangerouslySetInnerHTML={{
      __html: bellCurve()
    }} />
  )
}