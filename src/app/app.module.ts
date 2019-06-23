import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'

import { AuthenticationGuard } from './services/authentication-guard.service'

@NgModule({
	declarations: [
		AppComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
	],
	providers: [
		AuthenticationGuard,
	],
	bootstrap: [AppComponent],
})
export class AppModule { }
