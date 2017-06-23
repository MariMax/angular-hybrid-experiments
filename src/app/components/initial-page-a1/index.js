import angular from 'angular';
import uiRouter from 'angular-ui-router';
import { appDowngrade } from '../../app.downgrade';
// import {lazyDowngrade} from '../lazy-a2/lazyDowngrade.js';
// import {lazyLoadService} from '../../lazy-loader.service.downgrade';
import 'oclazyload';

const deps = ['oc.lazyLoad', uiRouter, appDowngrade];

const initialPageRouter = ($stateProvider, $urlRouterProvider) => {
  'ngInject';

  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('home', {
      url: '/',
      template: 'hello from a1 router',
    })
    .state('test', {
      url: '/test',
      resolve: {
        lazy($ocLazyLoad) {
          return require.ensure([], () => require('../test-page-a1'), 'testPage')
            .then(module => $ocLazyLoad.load({
              name: module.testPage
            }));
        }
      },
      template: '<main-test />',
    })
    .state('lazy', {
      url: '/lazy',
      resolve: {
        lazy($ocLazyLoad) {
          // lazyLoadService.injectModule('..')
          return require.ensure([], () => require('../lazy-a2/lazyDowngrade.js'), 'lazyDowngrade')
            .then(module => $ocLazyLoad.load({
              name: module.lazyDowngrade
            }));
        }
      },
      template: 'hey <lazy-comp></lazy-comp>',
    });
};


export const initialPage = angular.module('Hybrid.main', deps)
  .config(initialPageRouter)
  .component('mainApp', {
    template: `
      <app-component></app-component>
      <div> text from a1 
      <br />
      <a href="/#!/test" >test</a>
      <br />
      <a href="/#!/lazy" >lazy</a>
      </div>
      <ui-view>hello from a1<ui-view>
    `
  }).name;