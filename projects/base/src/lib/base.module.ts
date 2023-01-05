import { NgModule } from '@angular/core';
import { PlayerModule } from './components/player/player.module';

/**
* Needed to export components and directives
*/
@NgModule({
	declarations: [],
	exports: [
		PlayerModule
	]
})

export class BaseModule {}
