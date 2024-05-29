import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { Router } from "@angular/router";
import { LibraryService } from "../../../assets/services/library.service";

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
		this.loadLibraries();
	}

	loadLibraries(): void {
		this.libraryService.getLibraries().subscribe((libraries) => {
			console.log(libraries);
		});
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

	deleteLibrary(id: number): void {
		window.alert("Are you sure");
		this.libraryService.deleteLibrary(id).subscribe(
			(response) => {
				console.log("Library deleted successfully", response);
				this.libraries = this.libraries.filter(
					(library) => Number(library.id) !== id
				);
				this.loadLibraries();
			},
			(error) => {
				console.error("Error deleting library", error);
			}
		);
	}
}
