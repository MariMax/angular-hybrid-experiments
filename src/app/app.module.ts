import * as angular from 'angular';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {UpgradeModule, setAngularLib} from "@angular/upgrade/static";
import { AppComponent } from './app.component';
import {initialPage} from './components/initial-page-a1';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UpgradeModule
  ],
  providers: [],
  entryComponents: [AppComponent],
})
export class AppModule { 
  constructor(private upgrade: UpgradeModule){}
  ngDoBootstrap(){
    setAngularLib(angular);
    this.upgrade.bootstrap(document.body, [initialPage]);
  }
}
