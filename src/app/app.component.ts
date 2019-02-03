import { Component } from '@angular/core'

import * as fix from 'quill'
import Quill from 'quill'

const parchment = Quill.import('parchment')
const block = parchment.query('block')
block.tagName = 'DIV'
// or class NewBlock extends Block {} NewBlock.tagName = 'DIV'
Quill.register(block /* or NewBlock */, true)

const colors = Quill.import('formats/color')
Quill.register(colors, true)

console.log(colors)

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'ngx-quill-example'
}