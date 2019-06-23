import { Injectable } from '@angular/core'

@Injectable({
	providedIn: 'root',
})
export class AuthenticationService {
	private _loggedIn = false
	public login(username: string, _password: string): Promise<boolean> {
		console.info(`Logging ${username}`)
		this._loggedIn = true
		return Promise.resolve(this._loggedIn)
	}

	public loggedIn(): boolean {
		return this._loggedIn
	}
}
