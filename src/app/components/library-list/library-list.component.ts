import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

interface Library {
	name: string;
	type: string;
	location: string;
	books: string[];
}

@Component({
	selector: "app-library-list",
	standalone: true,
	imports: [CommonModule],
	templateUrl: "./library-list.component.html",
	styleUrl: "./library-list.component.css",
})
export class LibraryListComponent {
	libraries: Library[] = [
		{
			name: "Pines Library",
			type: "Medical Library",
			location: "Rome, Italy",
			books: ["An Oasis", "Bee Trap", "Coach Cola Tale", "D' Hero"],
		},
		{
			name: "Starlight Archives",
			type: "Academic Library",
			location: "Istanbul, Turkey",
			books: ["An Oasis", "Bee Trap", "Coach Cola Tale", "D' Hero"],
		},
		{
			name: "Emberglow",
			type: "Fictional Library",
			location: "Mumbai, India",
			books: ["An Oasis", "Bee Trap", "Coach Cola Tale", "D' Hero"],
		},
		{
			name: "Library for Kids",
			type: "Academic Library",
			location: "Rome, Italy",
			books: ["An Oasis", "Bee Trap", "Coach Cola Tale", "D' Hero"],
		},
		{
			name: "Scrolls Library",
			type: "Medical Library",
			location: "Istanbul, Turkey",
			books: ["An Oasis", "Bee Trap", "Coach Cola Tale", "D' Hero"],
		},
	];
}
