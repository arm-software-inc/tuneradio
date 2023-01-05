import { Component } from '@angular/core';

@Component({
	selector: 'web-root',
	template: ' <router-outlet></router-outlet> ',
	styleUrls: ['./app.component.scss']
})

export class AppComponent {
	title = 'web';
}
