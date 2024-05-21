import { Component, OnInit } from "@angular/core";
import { LibrariesService } from "../../../assets/services/libraries.service";
import { CommonModule } from "@angular/common";

@Component({
	selector: "app-libraries",
	standalone: true,
	imports: [CommonModule],
	templateUrl: "./libraries.component.html",
	styleUrl: "./libraries.component.css",
})
export class LibrariesComponent implements OnInit {
	libraries: any[] = [];

	constructor(private libraryService: LibrariesService) {}

	ngOnInit(): void {
		this.libraryService.getLibraries().subscribe((data) => {
			this.libraries = data.libraries;
		});
	}
}
