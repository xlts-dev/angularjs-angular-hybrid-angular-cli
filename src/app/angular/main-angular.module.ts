import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonsComponent } from './buttons/buttons.component';
import { CdkTreeComponent } from './cdk-tree/cdk-tree.component';
import { CdkTreeModule } from '@angular/cdk/tree';
import { CdkTreeService } from './cdk-tree/cdk-tree.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { LayoutModule } from '@angular/cdk/layout';
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
import { ToastrModule } from 'ngx-toastr';
import { TopNavComponent } from './top-nav/top-nav.component';
import { VersionStampComponentDirective } from '../angularjs/version-stamp.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CdkTreeModule,
    CommonModule,
    HttpClientModule,
    LayoutModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatExpansionModule,
    MatTabsModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    ToastrModule.forRoot(),
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
  providers: [CdkTreeService],
})
export class MainAngularModule {
  // eslint-disable-next-line
  ngDoBootstrap() {}
}
