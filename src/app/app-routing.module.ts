import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

const appRoutes: Routes = [
	{
		path: 'ml-authentication',
		loadChildren: './authentication/authentication.module#AuthenticationModule',
	},
	{
		path: '**',
		redirectTo: 'ml-authentication',
		pathMatch: 'full',
	},
]

@NgModule({
	imports: [RouterModule.forRoot(appRoutes)],
	exports: [RouterModule],
})
export class AppRoutingModule { }
