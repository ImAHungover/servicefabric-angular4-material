import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'angular 4 + material in SF!';


	progress: number = 0;

	constructor() {
		// Update the value for the progress-bar on an interval.
		setInterval(() => {
			this.progress = (this.progress + Math.floor(Math.random() * 4) + 1) % 100;
		}, 200);
	}
}
