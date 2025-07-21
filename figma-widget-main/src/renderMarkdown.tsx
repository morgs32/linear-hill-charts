import { Lexer, marked } from 'marked';

export type ITokens = marked.Token[] | marked.TokensList;
const { widget } = figma
const { 
  Text,
  AutoLayout
} = widget

export function renderMarkdown(source: string) {
  const lexerOptions = {}
  const tokens = Lexer.lex(source, lexerOptions)
  return parse(tokens)
}

export type HeadingLevels = 1 | 2 | 3 | 4 | 5 | 6;
export interface TableFlags {
  header?: boolean;
  align?: 'center' | 'left' | 'right' | null;
}

let count = 0;

function parse(tokens: ITokens): FigmaVirtualNode<any>[] {
  return tokens.map((token) => {
    count++
    switch (token.type) {
      case 'space': {
        return null;
      }

      case 'heading': {
        const level = token.depth as HeadingLevels;
        return (
          <AutoLayout 
            key={count}
          >
            {'#'.repeat(level)} {parse(token.tokens)}
          </AutoLayout>
        )
      }

      case 'paragraph': {
        return (
          <Text
            key={count}
          >
            {parse(token.tokens)}
          </Text>
        )
      }

      case 'blockquote': {
        return (
          <Text
            key={count}
          >
            {parse(token.tokens)}
          </Text>
        )
      }

      case 'list': {
        const children = token.items.map((item) => {
          count++
          const listItemChildren = [];
          if (item.task) {
            listItemChildren.push(
              <Text
                key={count}
              >
                {item.checked ? '☑' : '☐'}
              </Text>
            );
            count++
          }
          listItemChildren.push(
            <Text
              key={count}
            >
              {parse(item.tokens)}
            </Text>
          );
          count++
          return (
            <Text
              key={count}
            >
              {listItemChildren}
            </Text>
          )
        });
        if (token.ordered) {
          return (
            <Text
              key={count}
            >
              {children}
            </Text>
          )
        }
        return (
          <Text
            key={count}
          >
            {children}
          </Text>
        )
      }

      case 'code': {
        return (
          <Text
            key={count}
          >
            {token.text}
          </Text>
        )
      }

      // case 'table': {
      //   const headerCells = token.header.map((cell, index) => {
      //     return this.renderer.tableCell(this.parseInline(cell.tokens), { header: true, align: token.align[index] });
      //   });

      //   const headerRow = this.renderer.tableRow(headerCells);
      //   const header = this.renderer.tableHeader(headerRow);

      //   const bodyChilren = token.rows.map((row) => {
      //     const rowChildren = row.map((cell, index) => {
      //       return this.renderer.tableCell(this.parseInline(cell.tokens), {
      //         header: false,
      //         align: token.align[index],
      //       });
      //     });

      //     return this.renderer.tableRow(rowChildren);
      //   });

      //   const body = this.renderer.tableBody(bodyChilren);

      //   return this.renderer.table([header, body]);
      // }

      // case 'hr': {
      //   return (
      //     <hr />
      //   )
      // }

      case 'text': {
        return token.text
      }

      case 'strong': {
        return (
          <Text 
            key={count}>
            {parse(token.tokens)}
          </Text>
        )
      }

      case 'em': {
        return (
          <Text 
            key={count}>
            {parse(token.tokens)}
          </Text>
        )
      }


      // case 'link': {
      //   return this.renderer.link(token.href, this.parseInline(token.tokens));
      // }

      // case 'image': {
      //   return this.renderer.image(token.href, token.text, token.title);
      // }

      // case 'html': {
      //   return this.renderer.html(token.text);
      // }

      // case 'br': {
      //   return this.renderer.br();
      // }

      // case 'escape': {
      //   return this.renderer.text(token.text);
      // }


      default: {
        console.warn(`Token with "${token.type}" type was not found`); // eslint-disable-line no-console
        return null;
      }

    }
  });
}

