// See: https://raw.githubusercontent.com/yuanqing/create-figma-plugin/cb6879f4602f97f268ed0bbab461927b7e34bd88/packages/utilities/src/ui.ts

export function showUI<Data extends Record<string, unknown>>(
  options: ShowUIOptions,
  data?: Data
): void {
  figma.ui.close()
  if (typeof __uiFiles__.js === 'undefined') {
    throw new Error('No UI defined')
  }
  const html = `<style>${__uiFiles__.css}</style><div id="lhc-plugin"></div><script>document.body.classList.add('theme-${
    figma.editorType
  }');const __FIGMA_COMMAND__='${
    typeof figma.command === 'undefined' ? '' : figma.command
  }';const __SHOW_UI_DATA__=${JSON.stringify(
    typeof data === 'undefined' ? {} : data
  )};${__uiFiles__.js}</script>`
  figma.showUI(html, {
    ...options,
    themeColors:
      typeof options.themeColors === 'undefined' ? true : options.themeColors
  })
}

export const uiDimensions = { 
  width: 460,
  height: 460, 
}