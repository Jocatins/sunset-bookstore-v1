import { Component, OnInit } from "@angular/core";
import {
	FormBuilder,
	FormGroup,
	ReactiveFormsModule,
	Validators,
	FormControl,
} from "@angular/forms";
import { CommonModule } from "@angular/common";
import { BookService } from "../../../assets/services/book.service";
import { Library } from "../../../assets/models/Library";
import { Book } from "../../../assets/models/Book";
import { Router } from "@angular/router";

import { NavbarComponent } from "../navbar/navbar.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
	selector: "app-book-form",
	standalone: true,
	imports: [
		CommonModule,
		ReactiveFormsModule,
		NavbarComponent,
		FooterComponent,
	],
	templateUrl: "./book-form.component.html",
	styleUrl: "./book-form.component.css",
})
export class BookFormComponent implements OnInit {
	libraries: Library[] = [];
	selectedLibraryId = new FormControl();
	bookForm!: FormGroup;

	constructor(
		private fb: FormBuilder,
		private bookService: BookService,
		private router: Router
	) {}
	ngOnInit(): void {
		this.bookForm = this.fb.group({
			title: ["", Validators.required],
			author: ["", Validators.required],
			description: ["", Validators.required],
			status: ["IN", Validators.required],
			dueDate: ["", Validators.required],
		});

		this.loadLibraries();
	}

	loadLibraries(): void {
		this.bookService.getLibraries().subscribe((libraries) => {
			this.libraries = libraries;
		});
	}

	onSubmit(): void {
		if (this.bookForm.valid && this.selectedLibraryId) {
			const newBook: Book = {
				id: new Date().getTime(),
				...this.bookForm.value,
			};
			const libraryId = this.selectedLibraryId.value;

			this.bookService
				.addBook(libraryId, newBook)
				.subscribe((response) => {
					console.log("Book added successfully", response);
					window.alert("Book added successfully");
					this.bookForm.reset({ status: "IN" });
					this.router.navigate(["/libraries"]);
				});
		}
	}
	cancelButton() {
		this.router.navigate(["/libraries"]);
	}
}
