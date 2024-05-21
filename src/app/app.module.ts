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

const routes: Routes = [
	{ path: "login", component: AuthComponent },
	{ path: "libraries", component: LibrariesComponent },
	{ path: "libraries/:id", component: LibrariesComponent },
	{ path: "libraries/:id/books", component: BookFormComponent },
	{ path: "libraries/:id/books/:id", component: BookFormComponent },
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

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
