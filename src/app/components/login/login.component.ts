import { Component } from "@angular/core";
import { FormBuilder, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "../../../assets/services/auth.service";
import { CommonModule } from "@angular/common";

@Component({
	selector: "app-login",
	standalone: true,
	imports: [CommonModule, ReactiveFormsModule],
	templateUrl: "./login.component.html",
	styleUrl: "./login.component.css",
})
export class LoginComponent {
	loginForm: FormGroup;
	errorMessage: string | null = null;

	constructor(
		private fb: FormBuilder,
		private authService: AuthService,
		private router: Router
	) {
		this.loginForm = this.fb.group({
			username: [""],
			password: [""],
		});
	}
	onSubmit(): void {
		const { username, password } = this.loginForm.value;
		this.authService.login(username, password).subscribe(
			(response) => {
				// Redirect to another page after successful login
				this.router.navigate(["/libraries"]);
			},
			(error) => {
				this.errorMessage = "Invalid username or password";
			}
		);
	}
}
