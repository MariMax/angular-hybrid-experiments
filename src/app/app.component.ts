import { Component } from '@angular/core';
// import {LazyModule} from './components/lazy-a2';

@Component({
  selector: 'app-component',
  template: `<div>just a text from a2</div>`,
  styles: [`
    body{
      padding:0;
      margin: 0;
      width: 100vw;
      height: 100vh;
    }
  `],
})
export class AppComponent { }
