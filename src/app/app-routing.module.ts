import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AuthGuard } from "../assets/auth/auth.guard";

import { BookFormComponent } from "./components/book-form/book-form.component";
import { BookStoreComponent } from "./components/book-store/book-store.component";
import { LibrariesComponent } from "./components/libraries/libraries.component";
import { LibraryDetailComponent } from "./components/library-detail/library-detail.component";
import { LibraryListComponent } from "./components/library-list/library-list.component";
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
		path: "library",
		component: LibraryListComponent,
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
	{ path: "book", component: BookStoreComponent },
	{ path: "", redirectTo: "/login", pathMatch: "full" },
	{ path: "**", redirectTo: "/login" },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
