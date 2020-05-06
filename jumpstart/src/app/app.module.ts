import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { LineComponent } from './line/line.component';
import { TemplateReferenceVariableComponent } from './template-reference-variable/template-reference-variable.component';

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    LineComponent,
    TemplateReferenceVariableComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
