import 'angular-messages';
import './templates/templates';
import { downgradeComponent, downgradeModule } from '@angular/upgrade/static';
import * as angular from 'angular';
import * as ngAnimate from 'angular-animate';
import * as ngAria from 'angular-aria';
import * as ngMaterial from 'angular-material';
import * as ngSanitize from 'angular-sanitize';
import { environment } from '../../environments/environment';
import { AppComponent } from '../angular/app.component';
import { appAngularjsComponent } from './app-angularjs.component';
import { bootstrapAngular } from './bootstrap-module';


import { tabsComponent } from './tabs.component';
import { versionStampComponent } from './version-stamp.component';

const downgradedModule = downgradeModule(bootstrapAngular);

const configFunction = ($mdThemingProvider: any, $mdGestureProvider: any) => {
  $mdThemingProvider
    .theme('default')
    .primaryPalette('indigo')
    .accentPalette('green', { default: '500' })
    .backgroundPalette('grey', { default: 'A100' });
  $mdThemingProvider.setNonce(`${btoa(environment.version)}`);
  $mdGestureProvider.skipClickHijack();
};
configFunction.$inject = ['$mdThemingProvider', '$mdGestureProvider'];

export const appAngularjsModule = angular
  .module('AngularJSApp', [ngAnimate, ngMaterial, ngSanitize, ngAria, 'ngMessages', 'templates', downgradedModule])
  .config(configFunction)
  .component(appAngularjsComponent.selector, appAngularjsComponent)
  .component(versionStampComponent.selector, versionStampComponent)
  .component(tabsComponent.selector, tabsComponent)
  .directive(
    AppComponent.selector,
    downgradeComponent({
      component: AppComponent,
      downgradedModule,
    })
  );
