import { downgradeComponent } from '@angular/upgrade/static';
import { AppComponent } from './app.component';
import angular from 'angular';

export const appDowngrade = angular.module('Hybrid.appDowngrade', [])
  .directive('appComponent', downgradeComponent({
    component: AppComponent
  })).name;
