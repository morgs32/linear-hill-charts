import React from 'react'
import satori from 'satori'
import { NextRequest } from 'next/server'
import { renderMarkdown } from './renderMarkdown'


export async function GET(req: NextRequest) {
  const markdown = `
# Welcome to Markdown

## Explanation

In this post we will show what *Parsedown* generates out of this **markdown** snippet.
We will show what the resulting \`HTML\` looks like. We will look at:

  * Headlines
  * Formatting within text
  * Lists
  * Paragraphs
  * Blockquotes

Note that --- not considering the asterisk --- the actual text
content starts indentend.

> If you want to use a quote by someone else you can do this with a 
> blockquote like this.

`
  try {
    // https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap
  // curl "http://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" -H 'User-Agent: Mozilla/5.0 Firefox/30.0'
    const inter = await fetch('http://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfMZs.woff')
      .then(res => res.arrayBuffer())
    const interBold = await fetch('http://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuFuYMZs.woff')
      .then(res => res.arrayBuffer())

    const svg = await satori(
      (
        <div
          style={{
            fontFamily: 'Inter', 
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {renderMarkdown(markdown)}
        </div>
      ),
      {
        width: 600,
        height: 400,
        fonts: [
          {
            name: 'Inter',
            data: inter,
            weight: 400,
            style: 'normal',
          },
          {
            name: 'Inter',
            data: interBold,
            weight: 700,
            style: 'normal',
          },
        ],    
      },
    )
    return new Response(svg, {
      headers: {
        'Content-Type': 'image/svg+xml',
      }
    })
  }
  catch (e: any) {
    console.error(e)
    return e.message
  }
}