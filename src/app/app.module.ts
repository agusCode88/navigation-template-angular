import { LOCALE_ID, NgModule } from '@angular/core';
import { AppComponent } from './app.component';;
import { SharedModule } from './shared/shared.module';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

// Configuracin del locale de la APP

import localEsCL from '@angular/common/locales/es-CL'
import localFrCa from '@angular/common/locales/fr-CA'

import { registerLocaleData } from '@angular/common'

registerLocaleData( localEsCL );
registerLocaleData( localFrCa );

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [  
    CommonModule,
    SharedModule,
    BrowserAnimationsModule, 
    AppRoutingModule
    
  ],
  providers: [{
    provide: LOCALE_ID, useValue: 'es-CL'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
