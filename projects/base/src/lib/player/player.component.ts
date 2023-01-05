import { Component } from '@angular/core';

type PlayerState = 'pause' | 'play';

@Component({
	selector: 'base-player',
	templateUrl: './player.component.html',
	styleUrls: ['./player.component.css']
})

export class PlayerComponent {
	state: PlayerState = 'pause';

	toggleState(): void {
		this.state = this.state === 'play' ? 'pause' : 'play';
	}
}
