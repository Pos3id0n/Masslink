import { NgModule } from '@angular/core'

import { AuthenticationRoutingModule } from './authentication-routing.module'

import { AuthenticationComponent } from './authentication.component'


@NgModule({
	imports: [
		AuthenticationRoutingModule,
	],
	declarations: [AuthenticationComponent],
})
export class AuthenticationModule { }
