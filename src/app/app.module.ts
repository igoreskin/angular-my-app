import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';

import { FormsModule } from '@angular/forms';
import { ChildComponent } from './child/child.component';
import { TempConverterPipe } from './temp-converter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    ChildComponent,
    TempConverterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
