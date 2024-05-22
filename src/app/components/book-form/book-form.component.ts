import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { LibraryService } from "../../../assets/services/library.service";

@Component({
	selector: "app-book-form",
	standalone: true,
	imports: [CommonModule, ReactiveFormsModule],
	templateUrl: "./book-form.component.html",
	styleUrl: "./book-form.component.css",
})
export class BookFormComponent implements OnInit {
	bookForm: FormGroup;
	libraries: any[] = [];

	constructor(
		private fb: FormBuilder,
		private libraryService: LibraryService
	) {
		this.bookForm = this.fb.group({
			title: [""],
			author: [""],
			isbn: [""],
			libraryId: [""],
			status: ["IN"],
			dueDate: [""],
		});
	}
	ngOnInit(): void {
		this.libraryService.getLibraries().subscribe((data) => {
			this.libraries = data.libraries;
		});
	}

	onSubmit(): void {
		const book = {
			title: this.bookForm.value.title,
			author: this.bookForm.value.author,
			isbn: this.bookForm.value.isbn,
		};

		const libraryId = this.bookForm.value.libraryId;
		const status = this.bookForm.value.status;
		const dueDate = this.bookForm.value.dueDate;

		this.libraryService.addBook(book).subscribe((newBook) => {
			const bookAssignment = {
				book_id: newBook.id,
				status: status,
				dueDate: dueDate,
			};
			this.libraryService
				.assignBookToLibrary(libraryId, bookAssignment)
				.subscribe(() => {
					console.log("Book added and assigned successfully");
				});
		});
	}
}
