import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { TopBarComponent } from "./top-bar/top-bar.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { LibrariesComponent } from "./components/libraries/libraries.component";

import { AuthComponent } from "./components/auth/auth.component";
import { BookFormComponent } from "./components/book-form/book-form.component";

@NgModule({
	imports: [
		BrowserModule,
		ReactiveFormsModule,
		HttpClientModule,
		RouterModule.forRoot([
			{ path: "", component: ProductListComponent },
			{ path: "auth", component: AuthComponent },
			{ path: "library", component: LibrariesComponent },
			{ path: "book", component: BookFormComponent },
		]),
		LibrariesComponent,
		BookFormComponent,
	],
	declarations: [AppComponent, TopBarComponent, ProductListComponent],
	bootstrap: [AppComponent],
})
export class AppModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
