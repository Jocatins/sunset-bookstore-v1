// auth.service.ts
import { Injectable } from "@angular/core";

@Injectable({
	providedIn: "root",
})
export class Auth1Service {
	private isAuthenticated = false;

	constructor() {}

	login() {
		this.isAuthenticated = true;
	}

	logout() {
		this.isAuthenticated = false;
	}

	isLoggedIn(): boolean {
		return this.isAuthenticated;
	}
}
