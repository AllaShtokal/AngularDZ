import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NodeComponent } from './tree/node/node.component';
import { TreeComponent } from './tree/tree.component';

@NgModule({
   declarations: [
      AppComponent,
      NodeComponent,
      TreeComponent
   ],
   imports: [
	 BrowserModule,
	 FormsModule,
	],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
