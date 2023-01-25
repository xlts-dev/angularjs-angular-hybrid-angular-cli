import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonsComponent } from './buttons/buttons.component';
import { CdkTreeComponent } from './cdk-tree/cdk-tree.component';
import { CdkTreeModule } from '@angular/cdk/tree';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule } from '@angular/core';
import { TabsComponent } from './tabs/tabs.component';
import { TabsComponentDirective } from '../angularjs/tabs.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { VersionStampComponentDirective } from '../angularjs/version-stamp.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    HttpClientModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatExpansionModule,
    MatTabsModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    CdkTreeModule,
  ],
  declarations: [
    AppComponent,
    VersionStampComponentDirective,
    TabsComponentDirective,
    TabsComponent,
    ButtonsComponent,
    CdkTreeComponent,
    TopNavComponent,
  ],
})
export class MainAngularModule {
  // eslint-disable-next-line
  ngDoBootstrap() {}
}
