// auth.service.ts
import { Injectable } from "@angular/core";

@Injectable({
	providedIn: "root",
})
export class Auth1Service {
	private isAuthenticated: boolean;

	constructor() {
		// Initialize isAuthenticated from localStorage
		this.isAuthenticated = !!localStorage.getItem("isAuthenticated");
	}

	login() {
		this.isAuthenticated = true;
		localStorage.setItem("isAuthenticated", "true");
	}

	logout() {
		this.isAuthenticated = false;
		localStorage.removeItem("isAuthenticated");
	}

	isLoggedIn(): boolean {
		return this.isAuthenticated;
	}
}
