import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

import { LibraryService } from "../../../assets/services/library.service";

import { catchError } from "rxjs/operators";
import { of } from "rxjs";

@Component({
	selector: "app-library-detail",
	standalone: true,
	imports: [CommonModule, RouterModule],
	templateUrl: "./library-detail.component.html",
	styleUrl: "./library-detail.component.css",
})
export class LibraryDetailComponent implements OnInit {
	library: any;

	constructor(
		private route: ActivatedRoute,
		private libraryService: LibraryService
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
					this.library = library;
				});
		} else {
			console.error("Invalid library ID");
		}
	}
}
