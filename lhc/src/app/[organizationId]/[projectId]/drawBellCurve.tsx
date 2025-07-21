import {
  paddingY,
  hillWidth,
  hillHeight,
  paddingX
} from './dimensions';

const step = 0.25;

function plotOnBell(x: number, scale?: boolean): number {
  // This is the real workhorse of this algorithm. It returns values along a bell curve from 0 - 1 - 0 with an input of 0 - 1.
  const stdD = 0.125;
  const mean = 0.5;
  if (scale) {
    return (
      1 /
        ((1 / (stdD * Math.sqrt(2 * Math.PI))) *
          Math.pow(
            Math.E,
            (-1 * Math.pow(x - mean, 2)) / (2 * Math.pow(stdD, 2))
          ))
    );
  } else {
    return (
      (1 / (stdD * Math.sqrt(2 * Math.PI))) *
        Math.pow(
          Math.E,
          (-1 * Math.pow(x - mean, 2)) / (2 * Math.pow(stdD, 2))
        ) *
        plotOnBell(0.5, true)
    );
  }
}

export function plotOnHill(x: number) {
  const plot = plotOnBell(x).toFixed(6);
  return parseFloat(plot);
}

function getLineCoords(width: number, height: number) {
  const coords: [number, number][] = [
    [paddingX, height + paddingY],
  ];
  for (let i = step; i < 100; i += step) {
    const x = (i / 100) * width + paddingX;
    const y = height - (height * plotOnHill(i / 100)) + paddingY
    coords.push([x, y]);
  }
  coords.push([width, height + paddingY]);
  return coords
}

export function bellCurve() {

  const coords = getLineCoords(hillWidth, hillHeight);

  return `
    <path
      stroke="black"
      fill="none"
      strokeWidth="3"
      d="M ${coords.map(c => c.join(' ')).join(' L ')}"
    />
  `
}
