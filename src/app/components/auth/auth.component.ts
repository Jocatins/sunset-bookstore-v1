import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../../../assets/services/auth.service";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

@Component({
	selector: "app-auth",
	standalone: true,
	imports: [FormsModule, CommonModule],
	templateUrl: "./auth.component.html",
	styleUrl: "./auth.component.css",
})
export class AuthComponent {
	username: string = "";
	password: string = "";
	error: string = "";

	constructor(private authService: AuthService, private router: Router) {}

	login() {
		// this.authService.login(this.username, this.password).subscribe(
		// 	(data) => {
		// 		this.router.navigate([""]);
		// 	},
		// 	(error) => {
		// 		this.error = "Username or password is incorrect";
		// 	}
		// );
		console.log(this.username, this.password);
	}
}
