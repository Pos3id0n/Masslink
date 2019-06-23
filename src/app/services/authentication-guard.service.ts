import { Injectable } from '@angular/core'
import {
	ActivatedRouteSnapshot,
	CanActivate,
	Router,
	RouterStateSnapshot,
} from '@angular/router'
import { AuthenticationService } from './authentication.service'

const AUTH_URL = '/ml-authentication'
@Injectable()
export class AuthenticationGuard implements CanActivate {
	constructor(
		private authenticationService: AuthenticationService,
		private router: Router,
	) { }

	public canActivate(_route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
		const isAuthUrl = state.url === AUTH_URL
		if (!this.authenticationService.loggedIn()) {
			if (!isAuthUrl)
				this.router.navigateByUrl(AUTH_URL)
			return isAuthUrl
		}
		return !isAuthUrl
	}
}
