export const appAngularjsComponent = {
  selector: 'appAngularjs',
  template: '<app-component [name]="$ctrl.name"></app-component>',
  controller: class AppAngularjsCtrl {
    name = 'AngularJS/Angular Material';
  },
};
