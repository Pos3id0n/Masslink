import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AuthenticationGuard } from './services/authentication-guard.service'

const appRoutes: Routes = [
	{
		path: 'ml-authentication',
		loadChildren: './authentication/authentication.module#AuthenticationModule',
		canActivate: [AuthenticationGuard],
	},
	{
		path: 'ml-home',
		loadChildren: './home/home.module#HomeModule',
		canActivate: [AuthenticationGuard],
	},
	{
		path: '**',
		redirectTo: 'ml-home',
		pathMatch: 'full',
	},
]

@NgModule({
	imports: [RouterModule.forRoot(appRoutes)],
	exports: [RouterModule],
})
export class AppRoutingModule { }
