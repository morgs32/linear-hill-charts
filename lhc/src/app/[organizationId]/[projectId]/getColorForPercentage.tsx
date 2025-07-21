const percentColors = [
  {
    pct: 0, color: {
      r: 220, g: 38, b: 38
    }
  },
  {
    pct: 0.15, color: {
      r: 234, g: 88, b: 12
    }
  },
  {
    pct: 0.25, color: {
      r: 245, g: 158, b: 11
    }
  },
  {
    pct: 0.35, color: {
      r: 245, g: 158, b: 11
    }
  },
  {
    pct: 0.45, color: {
      r: 202, g: 138, b: 4
    }
  },
  {
    pct: 0.5, color: {
      r: 22, g: 163, b: 74
    }
  },  
  {
    pct: 1, color: {
      r: 35, g: 35, b: 35
    }
  },
];

type IColor = { r: number, g: number, b: number }

export const getColorForPercentage = function (percent: number): IColor {
  let i;
  for (i = 1; i < percentColors.length - 1; i++) {
    if (percent < percentColors[i].pct) {
      break;
    }
  }
  const lower = percentColors[i - 1];
  const upper = percentColors[i];
  const range = upper.pct - lower.pct;
  const rangePct = (percent - lower.pct) / range;
  const pctLower = 1 - rangePct;
  const pctUpper = rangePct;
  const color = {
    r: Math.floor(lower.color.r * pctLower + upper.color.r * pctUpper),
    g: Math.floor(lower.color.g * pctLower + upper.color.g * pctUpper),
    b: Math.floor(lower.color.b * pctLower + upper.color.b * pctUpper)
  };
  return color
};


export function makeRgb(color: IColor) {
  return 'rgb(' + [color.r, color.g, color.b].join(',') + ')'
}

const componentToHex = (c: number) => {
  const hex = c.toString(16);
  return hex.length === 1 ? '0' + hex : hex;
}

export function rgbToHex(color: IColor) {
  return '#' + componentToHex(color.r) + componentToHex(color.g) + componentToHex(color.b);
}