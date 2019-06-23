import { Injectable } from '@angular/core'

@Injectable({
	providedIn: 'root',
})
export class AuthenticationService {
	private _loggedIn = false
	public async login(username: string, _password: string): Promise<boolean> {
		console.info(`Logging ${username}`)
		this._loggedIn = true
		return this._loggedIn
	}

	public loggedIn(): boolean {
		return this._loggedIn
	}
}
