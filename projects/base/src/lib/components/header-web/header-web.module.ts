import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderWebComponent } from './header-web.component';

@NgModule({
	declarations: [HeaderWebComponent],
	imports: [CommonModule],
	exports: [HeaderWebComponent],
})
export class HeaderWebModule {}
