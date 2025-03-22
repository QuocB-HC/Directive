import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgTemplateExampleComponent } from './components/ng-template-example/ng-template-example.component';
import { ChildComponent } from './components/ng-content/child/child.component';
import { ParentComponent } from './components/ng-content/parent/parent.component';

@NgModule({
  declarations: [
    AppComponent,
    NgTemplateExampleComponent,
    ChildComponent,
    ParentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
