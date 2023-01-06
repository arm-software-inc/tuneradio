import { FooterWebModule } from './components/footer-web/footer-web.module';
import { HeaderWebModule } from './components/header-web/header-web.module';
import { NgModule } from '@angular/core';
import { PlayerModule } from './components/player/player.module';

/**
 * Needed to export components and directives
 */
@NgModule({
	declarations: [],
	exports: [PlayerModule, HeaderWebModule, FooterWebModule],
})
export class BaseModule {}
