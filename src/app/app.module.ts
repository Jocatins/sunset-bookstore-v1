import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";

import { LibrariesComponent } from "./components/libraries/libraries.component";

import { BookFormComponent } from "./components/book-form/book-form.component";
import { BookDetailComponent } from "./components/book-detail/book-detail.component";

import { LoginComponent } from "./components/login/login.component";

import { RegisterComponent } from "./components/register/register.component";
import { NavbarComponent } from "./components/navbar/navbar.component";

@NgModule({
	imports: [
		BrowserModule,
		ReactiveFormsModule,
		HttpClientModule,
		NavbarComponent,
		LibrariesComponent,
		BookFormComponent,
		LoginComponent,
		RegisterComponent,
		AppRoutingModule,
		BookDetailComponent,
	],
	declarations: [AppComponent],
	bootstrap: [AppComponent],
})
export class AppModule {}
