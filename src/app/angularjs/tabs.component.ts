import { Directive, ElementRef, Injector } from '@angular/core';
import { IScope } from 'angular';
import { UpgradeComponent } from '@angular/upgrade/static';

export const tabsComponent = {
  selector: 'app-ng1-tabs',
  templateUrl: '/tabs.component.html',
  controller: class TabsCtrl {
    static $inject = ['$scope'];
    $digestCount = 0;

    constructor($scope: IScope) {
      $scope.$watch(() => {
        this.$digestCount++;
        if (this.$digestCount % 100 === 0) {
          console.log('$digest', this.$digestCount);
        }
      });
    }
  },
};

@Directive({ selector: tabsComponent.selector })
export class TabsComponentDirective extends UpgradeComponent {
  constructor(elementRef: ElementRef, injector: Injector) {
    super(tabsComponent.selector, elementRef, injector);
  }
}
