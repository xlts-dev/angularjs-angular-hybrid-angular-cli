import * as angular from 'angular';
import { StaticProvider, enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { setAngularJSGlobal } from '@angular/upgrade/static';
import { MainAngularModule } from '../angular/main-angular.module';
import { environment } from '../../environments/environment';

export function bootstrapAngular(extraProviders: StaticProvider[]): any {
  setAngularJSGlobal(angular);
  if (!environment.production) {
    enableProdMode();
  }
  return platformBrowserDynamic(extraProviders)
    .bootstrapModule(MainAngularModule)
    .catch(err => console.log(err));
}
