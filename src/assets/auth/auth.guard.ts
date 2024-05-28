// auth.guard.ts
import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { Auth1Service } from "../services/auth1.service";

@Injectable({
	providedIn: "root",
})
export class AuthGuard implements CanActivate {
	constructor(private authService: Auth1Service, private router: Router) {}

	canActivate(): boolean {
		if (!this.authService.isLoggedIn()) {
			this.router.navigate(["/login"]);
			return false;
		}
		return true;
	}
}
