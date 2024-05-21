import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LibraryService } from "../../../assets/services/library.service";

@Component({
	selector: "app-libraries",
	standalone: true,
	imports: [CommonModule],
	templateUrl: "./libraries.component.html",
	styleUrl: "./libraries.component.css",
})
export class LibrariesComponent implements OnInit {
	libraries: any[] = [];
	errorMessage: string | null = null;

	constructor(private libraryService: LibraryService) {}

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
}
