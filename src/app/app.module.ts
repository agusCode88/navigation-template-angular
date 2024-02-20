import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';;
import { SharedModule } from './shared/shared.module';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
