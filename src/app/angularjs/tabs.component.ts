import { Directive, ElementRef, Injector } from '@angular/core';
import { UpgradeComponent } from '@angular/upgrade/static';
import { IScope, material } from 'angular';

export const tabsComponent = {
  selector: 'app-ng1-tabs',
  templateUrl: '/tabs.component.html',
  controller: class TabsCtrl {
    static $inject = ['$scope', '$mdToast'];
    $digestCount = 0;

    constructor($scope: IScope, private $mdToast: material.IToastService) {
      $scope.$watch(() => {
        this.$digestCount++;
        if (this.$digestCount % 100 === 0) {
          console.log('$digest', this.$digestCount);
        }
      });
    }

    showSimpleToast(message: string): void {
      this.$mdToast.show(this.$mdToast.simple().textContent(message).hideDelay(2000));
    }
  },
};

@Directive({ selector: tabsComponent.selector })
export class TabsComponentFacade extends UpgradeComponent {
  constructor(elementRef: ElementRef, injector: Injector) {
    super(tabsComponent.selector, elementRef, injector);
  }
}
