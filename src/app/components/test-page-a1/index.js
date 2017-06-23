import angular from 'angular';
import uiRouter from 'angular-ui-router';

export const testPage = angular.module('Hybrid.test', [uiRouter])
  .component('mainTest', {
    template: `
      <div> text from a1 test page <a href="/" >home route</a></div>
    `
  }).name;