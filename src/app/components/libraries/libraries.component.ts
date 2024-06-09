import { FooterComponent } from "./../footer/footer.component";
import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { Router } from "@angular/router";
import { LibraryService } from "../../../assets/services/library.service";
import { FormsModule } from "@angular/forms";

import { Library } from "../../../assets/models/Library";
import { NavbarComponent } from "../navbar/navbar.component";

import { Auth1Service } from "../../../assets/services/auth1.service";

function generateId(): string {
	const randomNumber = Math.floor(Math.random() * 90000) + 10000;
	return randomNumber.toString();
}

@Component({
	selector: "app-libraries",
	standalone: true,
	imports: [
		CommonModule,
		RouterModule,
		NavbarComponent,
		FormsModule,
		FooterComponent,
	],
	templateUrl: "./libraries.component.html",
	styleUrls: ["./libraries.component.css"],
})
export class LibrariesComponent implements OnInit {
	libraries: Library[] = [];
	filteredLibraries: Library[] = [];
	errorMessage: string | null = null;
	newLibrary: Library = {
		id: generateId(),
		name: "",
		location: "",
		books: [],
	};
	showAddLibraryForm: boolean = false;
	searchTerm: string = "";

	constructor(
		private libraryService: LibraryService,
		private auth1Service: Auth1Service,
		private router: Router
	) {}

	ngOnInit(): void {
		this.libraryService.getLibraries().subscribe(
			(data) => {
				this.libraries = data;
				this.filteredLibraries = data; // Initialize filteredLibraries with all libraries
				console.log("Libraries loaded:", data);
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

	addLibrary(): void {
		this.libraryService.addLibrary(this.newLibrary).subscribe(
			(response) => {
				console.log("Library added successfully", response);
				this.libraries.push(response);
				this.searchLibraries(); // Update the filtered libraries
				this.newLibrary = { id: "", name: "", location: "", books: [] }; // Reset the form
				this.showAddLibraryForm = false; // Hide the form after adding
			},
			(error) => {
				console.error("Error adding library", error);
			}
		);
	}

	deleteLibrary(id: number): void {
		window.alert("Are you sure?");
		this.libraryService.deleteLibrary(id).subscribe(
			(response) => {
				console.log("Library deleted successfully", response);
				this.libraries = this.libraries.filter(
					(library) => Number(library.id) !== id
				);
				this.searchLibraries(); // Update the filtered libraries
			},
			(error) => {
				console.error("Error deleting library", error);
			}
		);
	}

	searchLibraries(): void {
		if (!this.searchTerm) {
			this.filteredLibraries = this.libraries;
		} else {
			this.filteredLibraries = this.libraries.filter((library) =>
				library.name
					.toLowerCase()
					.includes(this.searchTerm.toLowerCase())
			);
		}
	}

	resetSearch(): void {
		this.searchTerm = "";
		this.searchLibraries();
	}
}
