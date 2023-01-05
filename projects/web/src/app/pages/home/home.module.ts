import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { BaseModule } from 'base';

@NgModule({
	declarations: [ HomeComponent ],
	imports: [
		CommonModule,
		BaseModule
	],
	exports: [ HomeComponent ]
})

export class HomeModule { }
