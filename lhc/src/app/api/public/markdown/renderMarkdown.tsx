import { Lexer, marked } from 'marked';
import { mdStyles } from './mdStyles';

export type ITokens = marked.Token[] | marked.TokensList;

export function renderMarkdown(source: string): React.ReactNode[] {

  const lexerOptions = {}
  const tokens = Lexer.lex(source, lexerOptions)
  const jsx = parse(tokens)
  return jsx
}

export type HeadingLevels = 1 | 2 | 3 | 4 | 5 | 6;
export interface TableFlags {
  header?: boolean;
  align?: 'center' | 'left' | 'right' | null;
}

let count = 0;

function parse(tokens: ITokens): React.ReactNode[] {
  return tokens.map((token) => {
    count++
    switch (token.type) {
      case 'space': {
        return null;
      }

      case 'heading': {
        const level = token.depth as HeadingLevels;
        return (
          <div 
            style={mdStyles.heading}
            key={count}
          >
            {'#'.repeat(level)} {parse(token.tokens)}
          </div>
        )
      }

      case 'paragraph': {
        return (
          <div
            style={mdStyles.p}
            key={count}
          >
            {parse(token.tokens)}
          </div>
        )
      }

      case 'blockquote': {
        return (
          <div
            style={mdStyles.blockquote}
            key={count}
          >
            {parse(token.tokens)}
          </div>
        )
      }

      case 'list': {
        const children = token.items.map((item) => {
          count++
          const listItemChildren = [];
          if (item.task) {
            listItemChildren.push(
              <div
                key={count}
              >
                {item.checked ? '☑' : '☐'}
              </div>
            );
            count++
          }
          listItemChildren.push(
            <div
              style={{
                display: 'flex'
              }}
              key={count}
            >
              {parse(item.tokens)}
            </div>
          );
          count++
          return (
            <li
              style={mdStyles.li}
              key={count}
            >
              {listItemChildren}
            </li>
          )
        });
        if (token.ordered) {
          return (
            <ol
              style={mdStyles.ol}
              key={count}
            >
              {children}
            </ol>
          )
        }
        return (
          <ul
            style={mdStyles.ul}
            key={count}
          >
            {children}
          </ul>
        )
      }

      case 'code': {
        return (
          <p
            style={mdStyles.code}
            key={count}
          >
            {token.text}
          </p>
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

      case 'hr': {
        return (
          <hr />
        )
      }

      case 'text': {
        return token.text
      }

      case 'strong': {
        return (
          <strong 
            style={mdStyles.strong}
            key={count}>
            {parse(token.tokens)}
          </strong>
        )
      }

      case 'em': {
        return (
          <em 
            style={mdStyles.em}
            key={count}>
            {parse(token.tokens)}
          </em>
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

