import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";

@Component({
	selector: "app-footer",
	standalone: true,
	imports: [CommonModule],
	templateUrl: "./footer.component.html",
	styleUrl: "./footer.component.css",
})
export class FooterComponent implements OnInit {
	ngOnInit(): void {
		console.log("footer-ngOnInit");
		this.updateYear();
	}
	updateYear(): void {
		const yearElement = document.getElementById("year");
		if (yearElement) {
			const currentYear = new Date().getFullYear();
			yearElement.innerText = currentYear.toString();
		}
	}
}
