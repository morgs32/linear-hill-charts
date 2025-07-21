import { drawHillchart } from './drawHillchart';

export function ExampleHill() {

  return (
    <div dangerouslySetInnerHTML={{
      __html: drawHillchart({
        activeIssueId: 'issue35',
        hillchartIssues: [
          {
            id: 'issue1',
            title: 'issue1',
            progress: 0
          },
          {
            id: 'issue25',
            title: 'issue25',
            progress: 0.25
          },
          {
            id: 'issue35',
            title: 'issue35',
            progress: 0.25
          },
          {
            id: 'issue2',
            title: 'issue2',
            progress: 0.5
          },
          {
            id: 'issue3',
            title: 'issue3',
            progress: 1
          },
          {
            id: 'issue4',
            title: 'issue4',
            progress: 4
          },
          {
            id: 'issue6',
            title: 'issue6',
            progress: 6
          },
          {
            id: 'issue10',
            title: 'issue10',
            progress: 10
          },
        ]
      }) 
    }} />
  )

}