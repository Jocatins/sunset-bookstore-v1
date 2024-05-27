import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, RouterModule, Router } from "@angular/router";
import { CommonModule } from "@angular/common";

import { LibraryService } from "../../../assets/services/library.service";
import { Library } from "../../../assets/models/Library";
import { NavbarComponent } from "../navbar/navbar.component";

import { catchError } from "rxjs/operators";
import { of } from "rxjs";

@Component({
	selector: "app-library-detail",
	standalone: true,
	imports: [CommonModule, RouterModule, NavbarComponent],
	templateUrl: "./library-detail.component.html",
	styleUrl: "./library-detail.component.css",
})
export class LibraryDetailComponent implements OnInit {
	library: Library | null = null;

	constructor(
		private route: ActivatedRoute,
		private libraryService: LibraryService,
		private router: Router
	) {}

	ngOnInit(): void {
		const idParam = this.route.snapshot.paramMap.get("id");
		if (idParam !== null) {
			const id = +idParam; // Convert id to a number
			this.libraryService
				.getLibraryById(id)
				.pipe(
					catchError((err) => {
						console.error(err);
						return of(null); // Fallback value in case of error
					})
				)
				.subscribe((library) => {
					console.log("Library Data:", library);
					this.library = library;
				});
		} else {
			console.error("Invalid library ID");
		}
	}
	addBookRoute() {
		this.router.navigate(["/add-book"]);
	}
}
