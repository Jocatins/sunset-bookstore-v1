import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { LibraryService } from "../../../assets/services/library.service";
import { AuthService } from "../../../assets/services/auth.service";

import { Router } from "@angular/router";

import { Library } from "../../../assets/models/Library";
import { NavbarComponent } from "../navbar/navbar.component";
import { Auth1Service } from "../../../assets/services/auth1.service";

@Component({
	selector: "app-libraries",
	standalone: true,
	imports: [CommonModule, RouterModule, NavbarComponent],
	templateUrl: "./libraries.component.html",
	styleUrl: "./libraries.component.css",
})
export class LibrariesComponent implements OnInit {
	libraries: Library[] = [];
	errorMessage: string | null = null;

	constructor(
		private libraryService: LibraryService,
		private auth1Service: Auth1Service,
		private router: Router
	) {}

	ngOnInit(): void {
		this.libraryService.getLibraries().subscribe(
			(data) => {
				this.libraries = data;
			},
			(error) => {
				this.errorMessage = "Error fetching libraries";
				console.error(error);
			}
		);
	}
	public logout() {
		this.auth1Service.logout();
		this.router.navigate(["/login"]);
	}
	public goToHome() {
		this.router.navigate(["/login"]);
	}
	public routeToBook(libraryId: string) {
		this.router.navigate(["/libraries", libraryId]);
	}
}
