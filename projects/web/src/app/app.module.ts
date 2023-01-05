import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BaseModule } from 'base';
import { HomeModule } from './pages/home/home.module';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BaseModule,
		HomeModule
	],
	providers: [],
	bootstrap: [AppComponent]
})

export class AppModule { }
