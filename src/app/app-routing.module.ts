import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

const appRoutes: Routes = [
	{
		path: 'ml-authentication',
		loadChildren: './authentication/authentication.module#AuthenticationModule',
	},
	{
		path: 'ml-home',
		loadChildren: './home/home.module#HomeModule',
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
