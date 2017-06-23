import angular from 'angular';
import {downgradeComponent} from '@angular/upgrade/static';

import {LazyComponent} from './index';

export const lazyDowngrade = angular.module('Hybrid.lazyD', [])
  .directive('lazyComp', downgradeComponent({
    component: LazyComponent
  }))
  .name;
