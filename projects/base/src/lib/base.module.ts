import { NgModule } from '@angular/core';
import { BaseComponent } from './base.component';
import { PlayerModule } from './player/player.module';

@NgModule({
	declarations: [
		BaseComponent
	],
	exports: [
		BaseComponent,
		PlayerModule
	]
})

export class BaseModule { }
