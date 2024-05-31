import { EditComponent } from "./components/edit/edit.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AuthGuard } from "../assets/auth/auth.guard";

import { BookFormComponent } from "./components/book-form/book-form.component";

import { LibrariesComponent } from "./components/libraries/libraries.component";
import { LibraryDetailComponent } from "./components/library-detail/library-detail.component";

import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";

const routes: Routes = [
	{ path: "login", component: LoginComponent },
	{
		path: "register",
		component: RegisterComponent,
		canActivate: [AuthGuard],
	},
	{
		path: "libraries",
		component: LibrariesComponent,
		canActivate: [AuthGuard],
	},
	{
		path: "libraries/:id",
		component: LibraryDetailComponent,
		canActivate: [AuthGuard],
	},
	{
		path: "add-book",
		component: BookFormComponent,
		canActivate: [AuthGuard],
	},
	{ path: "edit-book/:bookId", component: EditComponent },
	{ path: "", redirectTo: "/login", pathMatch: "full" },
	{ path: "**", redirectTo: "/login" },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
