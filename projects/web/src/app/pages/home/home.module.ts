import { HeaderWebModule } from './../../../../../base/src/lib/components/header-web/header-web.module';
import { FooterWebModule } from './../../../../../base/src/lib/components/footer-web/footer-web.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { BaseModule } from 'base';
// eslint-disable-next-line quotes
import { PlayerModule } from '../../../../../base/src/lib/components/player/player.module';

@NgModule({
	declarations: [HomeComponent],
	exports: [HomeComponent],
	imports: [
		CommonModule,
		BaseModule,
		PlayerModule,
		FooterWebModule,
		HeaderWebModule,
	],
})
export class HomeModule {}
