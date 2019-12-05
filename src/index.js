import { html, render } from 'lighterhtml'
const app = document.getElementById('app')

const Body = html`
  <div>
    Body
  </div>
`
render(app, Body)
import('./post/test01.md').then((post) => {
  const NewBody = html`
    <div>
      <!-- html text를 렌더링 -->
      ${{ html: post }}
    </div>
  `
  console.log(NewBody)
  render(app, NewBody)
})
