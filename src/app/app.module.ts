import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';

// register 'es' locale
registerLocaleData(localeEs);

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { CovalentLayoutModule } from '@covalent/core/layout'; 

import { CovalentBaseEchartsModule } from '@covalent/echarts/base';
import { CovalentLineEchartsModule } from '@covalent/echarts/line';
import { CovalentBarEchartsModule } from '@covalent/echarts/bar';
import { CovalentScatterEchartsModule } from '@covalent/echarts/scatter';
import { CovalentTooltipEchartsModule } from '@covalent/echarts/tooltip';

import { DocsAppComponent } from './app.component';
import { appRoutes, appRoutingProviders } from './app.routes';

// import {  } from '../platform/core';

@NgModule({
  declarations: [
    DocsAppComponent,
  ], // directives, components, and pipes owned by this NgModule
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    BrowserModule,
    HttpClientModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    /** Covalent Modules */
    CovalentLayoutModule,
    /** Covalent echarts Modules */
    CovalentBaseEchartsModule,
    CovalentLineEchartsModule,
    CovalentBarEchartsModule,
    CovalentScatterEchartsModule,
    CovalentTooltipEchartsModule,
    appRoutes,
  ], // modules needed to run this module
  providers: [
    appRoutingProviders,
  ], // additional providers needed for this module
  entryComponents: [ ],
  bootstrap: [ DocsAppComponent ],
})
export class AppModule {}
