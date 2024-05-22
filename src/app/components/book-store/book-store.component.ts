import { Component, OnInit } from "@angular/core";
import { BookService } from "../../../assets/services/book.service";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

@Component({
	selector: "app-book-store",
	standalone: true,
	imports: [RouterModule, CommonModule],
	templateUrl: "./book-store.component.html",
	styleUrl: "./book-store.component.css",
})
export class BookStoreComponent implements OnInit {
	books: any[] = [];
	errorMessage: string | null = null;

	constructor(private bookService: BookService) {}

	ngOnInit(): void {
		this.bookService.getBooks().subscribe(
			(data) => {
				this.books = data;
			},
			(error) => {
				this.errorMessage = "Error fetching libraries";
				console.error(error);
			}
		);
	}
}
