import { Directive, ElementRef, Injector, VERSION } from '@angular/core';
import { IWindowService, version as ngjsVersion } from 'angular';
import { UpgradeComponent } from '@angular/upgrade/static';
import { VERSION as cdkVersion } from '@angular/cdk';
import { VERSION as matVersion } from '@angular/material/core';

export const versionStampComponent = {
  selector: 'app-version-stamp',
  template: `
    <style>
      .version-container {
        color: gray;
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        margin: 8px;
        padding: 8px;
      }
      .version {
        height: 24px;
        font-size: 0.75em;
        font-style: italic;
      }
      .version img {
        vertical-align: top;
      }
      #version-stamp-divider {
        margin-top: 64px;
      }
    </style>

    <md-divider id="version-stamp-divider"></md-divider>
    <div class="version-container">
      <span class="version"><img src="/assets/angularjs.svg" alt=""> AngularJS v{{ $ctrl.versions.angularjs.full }} ({{ $ctrl.versions.angularjs.codeName }})</span>
      <span class="version"><img src="/assets/angularjs-material.png" alt=""> AngularJS Material v{{ $ctrl.versions.md }}</span>
      <span class="version"><img src="/assets/angular.svg" alt=""> Angular v{{ $ctrl.versions.angular }}</span>
      <span class="version"><img src="/assets/angular-cdk.svg" alt=""> Angular CDK v{{ $ctrl.versions.cdk }}</span>
      <span class="version"><img src="/assets/angular-material.svg" alt=""> Angular Material v{{ $ctrl.versions.mat }}</span>
    </div>
  `,
  controller: class VersionStampCtrl {
    static $inject = ['$window'];
    versions: object;

    constructor($window: IWindowService) {
      this.versions = {
        angularjs: ngjsVersion,
        md: $window.ngMaterial.version.full,
        angular: VERSION.full,
        cdk: cdkVersion.full,
        mat: matVersion.full,
      };
    }
  },
};

@Directive({ selector: versionStampComponent.selector })
export class VersionStampComponentFacade extends UpgradeComponent {
  constructor(elementRef: ElementRef, injector: Injector) {
    super(versionStampComponent.selector, elementRef, injector);
  }
}
