import './polyfills';
import * as angular from 'angular';
import { appAngularjsModule } from './app/angularjs/app-angularjs.module';
import { environment } from './environments/environment';

const rootElement = angular.element(document.body);

if (!environment.production) {
  // Ensure AngularJS destroys itself on hot reloads.
  const oldInjector = rootElement.injector();
  if (oldInjector) {
    oldInjector.get('$rootScope').$destroy();
    rootElement.data('$injector', null);
  }
}

angular.bootstrap(rootElement, [appAngularjsModule.name], { strictDi: true });
