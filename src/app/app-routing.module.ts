import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BookFormComponent } from "./components/book-form/book-form.component";
import { BookStoreComponent } from "./components/book-store/book-store.component";
import { LibrariesComponent } from "./components/libraries/libraries.component";
import { LibraryDetailComponent } from "./components/library-detail/library-detail.component";
import { LibraryListComponent } from "./components/library-list/library-list.component";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";

const routes: Routes = [
	{ path: "login", component: LoginComponent },
	{ path: "register", component: RegisterComponent },
	{ path: "libraries", component: LibrariesComponent },
	{ path: "library", component: LibraryListComponent },
	{ path: "libraries/:id", component: LibraryDetailComponent },
	{ path: "add-book", component: BookFormComponent },
	{ path: "book", component: BookStoreComponent },
	{ path: "", redirectTo: "/login", pathMatch: "full" },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
