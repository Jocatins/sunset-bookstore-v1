import { Component, OnInit } from "@angular/core";
import {
	FormBuilder,
	FormGroup,
	ReactiveFormsModule,
	Validators,
	FormControl,
} from "@angular/forms";
import { CommonModule } from "@angular/common";

import { LibraryService } from "../../../assets/services/library.service";
import { Library } from "../../../assets/models/Library";
import { Book } from "../../../assets/models/Book";
import { Router, ActivatedRoute } from "@angular/router";

import { NavbarComponent } from "../navbar/navbar.component";

@Component({
	selector: "app-edit",
	standalone: true,
	imports: [CommonModule, ReactiveFormsModule, NavbarComponent],
	templateUrl: "./edit.component.html",
	styleUrl: "./edit.component.css",
})
export class EditComponent implements OnInit {
	libraries: any[] = [];
	selectedLibraryId = new FormControl();
	bookForm: FormGroup;

	book: any;

	constructor(
		private fb: FormBuilder,

		private router: Router,
		private route: ActivatedRoute,
		private libraryService: LibraryService
	) {
		this.bookForm = this.fb.group({
			title: ["", Validators.required],
			author: ["", Validators.required],
			description: [""],
			status: ["IN", Validators.required],
			dueDate: ["", Validators.required],
		});
	}
	ngOnInit(): void {
		const bookId = this.route.snapshot.paramMap.get("bookId");
		if (bookId) {
			// Fetch the book details using the book ID
			// Implement the getBookById method in your LibraryService

			console.log(bookId, " book id");
			this.libraryService.getBookById(+bookId).subscribe((book) => {
				this.bookForm.patchValue(book);
				this.selectedLibraryId.setValue(book.libraryId);
			});
		}
		this.libraryService.getLibraries().subscribe((libraries) => {
			this.libraries = libraries;
		});
	}

	// Method to save edited book details
	saveBook() {
		if (this.bookForm.valid && this.selectedLibraryId.value) {
			const updatedBook = {
				...this.bookForm.value,
				libraryId: this.selectedLibraryId.value,
			};
			this.libraryService
				.editBook(this.bookForm.value.id, updatedBook)
				.subscribe(() => {
					this.router.navigate([
						"/libraries",
						this.selectedLibraryId.value,
					]);
				});
		}
	}
}
