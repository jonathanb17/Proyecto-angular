import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ZapatillasComponent } from './zapatillas/zapatillas.component';
import { AutosComponent } from './autos/autos.component';

@NgModule({
  declarations: [
    AppComponent,
    ZapatillasComponent,
    AutosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
