import { Component } from '@angular/core'
import { Router } from '@angular/router'

import { AuthenticationService } from '../services/authentication.service'

@Component({
	selector: 'ml-authentication',
	templateUrl: './authentication.component.html',
	styleUrls: ['./authentication.component.css'],
})
export class AuthenticationComponent {
	constructor(
		private router: Router,
		private authenticationService: AuthenticationService,
	) { }

	public submit(): void {
		this.authenticationService.login('', '')
			.then(_ => this.router.navigateByUrl('/'))
	}
}
