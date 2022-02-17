import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DateFormatPipe } from './date-format.pipe';
import { TableHttpService } from './shared/table-http.service';
import { TableFilterPipe } from './table-filter.pipe';
@NgModule({
  declarations: [
    AppComponent,
    TableFilterPipe,
    DateFormatPipe
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [TableHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
