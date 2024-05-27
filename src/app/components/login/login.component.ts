import { Component } from "@angular/core";
import {
	FormBuilder,
	FormGroup,
	ReactiveFormsModule,
	Validators,
} from "@angular/forms";
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
			username: ["", Validators.required],
			password: ["", Validators.required],
		});
	}

	onSubmit() {
		if (this.loginForm.invalid) {
			return;
		}

		const { username, password } = this.loginForm.value;

		if (username === "admin" && password === "kaapisoft") {
			this.authService.login(username, password).subscribe(
				(response) => {
					if (response.error) {
						this.errorMessage = "Invalid username or password";
					} else {
						this.router.navigate(["/libraries"]);
					}
				},
				(error) => {
					this.errorMessage = "Invalid username or password";
				}
			);
		} else {
			this.errorMessage = "Invalid username or password"; // Set error message if credentials are incorrect
		}
	}

	register() {
		this.router.navigate(["/register"]);
	}
}
