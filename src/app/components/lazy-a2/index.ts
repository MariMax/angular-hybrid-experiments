import { NgModule, Component } from "@angular/core";

@Component({
  selector: 'lazy-comp',
  template: '<div> text from a2 lazy page <a href="/" >home route</a></div>'
})
export class LazyComponent {
  
}

@NgModule({
  declarations: [LazyComponent],
  imports: [],
  exports: [LazyComponent],
  entryComponents:[LazyComponent],
})
export class LazyModule {}