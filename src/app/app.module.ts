import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, Routes } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";

import { TopBarComponent } from "./top-bar/top-bar.component";
import { LibrariesComponent } from "./components/libraries/libraries.component";
import { AuthComponent } from "./components/auth/auth.component";
import { BookFormComponent } from "./components/book-form/book-form.component";
import { LibraryDetailComponent } from "./components/library-detail/library-detail.component";

const routes: Routes = [
	{ path: "login", component: AuthComponent },
	{ path: "libraries", component: LibrariesComponent },

	{ path: "libraries/:libraryId", component: LibraryDetailComponent },
	{ path: "add-book", component: BookFormComponent },
	{ path: "", redirectTo: "/login", pathMatch: "full" },
];

@NgModule({
	imports: [
		BrowserModule,
		ReactiveFormsModule,
		HttpClientModule,
		RouterModule.forRoot(routes),
		LibrariesComponent,
		BookFormComponent,
	],
	declarations: [AppComponent, TopBarComponent],
	bootstrap: [AppComponent],
})
export class AppModule {}
