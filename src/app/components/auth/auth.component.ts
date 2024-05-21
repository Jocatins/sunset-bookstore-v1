import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../../../assets/services/auth.service";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
	selector: "app-auth",
	standalone: true,
	imports: [FormsModule, CommonModule, ReactiveFormsModule],
	templateUrl: "./auth.component.html",
	styleUrl: "./auth.component.css",
})
export class AuthComponent {
	loginForm: FormGroup;
	errorMessage: string | null = null;

	constructor(
		private fb: FormBuilder,
		private authService: AuthService,
		private router: Router
	) {
		this.loginForm = this.fb.group({
			username: ["", Validators.required],
			password: ["", Validators.required],
		});
	}

	onSubmit(): void {
		if (this.loginForm.valid) {
			const { username, password } = this.loginForm.value;
			this.authService.login(username, password).subscribe(
				(response) => {
					// Navigate to a different page after successful login
					this.router.navigate(["/dashboard"]);
				},
				(error) => {
					this.errorMessage = "Invalid username or password";
				}
			);
		}
	}
}
