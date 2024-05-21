import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { LibrariesService } from "../../../assets/services/libraries.service";
import { CommonModule } from "@angular/common";

@Component({
	selector: "app-book-form",
	standalone: true,
	imports: [CommonModule],
	templateUrl: "./book-form.component.html",
	styleUrl: "./book-form.component.css",
})
export class BookFormComponent implements OnInit {
	bookForm: FormGroup;
	libraries: any[] = [];

	constructor(
		private fb: FormBuilder,
		private librariesService: LibrariesService
	) {
		this.bookForm = this.fb.group({
			title: ["", Validators.required],
			author: ["", Validators.required],
			ISBN: ["", Validators.required],
		});
	}
	ngOnInit(): void {
		this.librariesService.getLibraries().subscribe((data) => {
			this.libraries = data.libraries;
		});
	}

	onSubmit(): void {
		if (this.bookForm.valid) {
			const newBook = {
				title: this.bookForm.value.title,
				author: this.bookForm.value.author,
				libraries: this.bookForm.value.libraryIds,
			};

			this.librariesService.addBook(newBook).subscribe((book) => {
				this.librariesService
					.assignBookToLibraries(book.id, newBook.libraries)
					.subscribe(() => {
						alert(
							"Book added and assigned to libraries successfully!"
						);
						this.bookForm.reset();
					});
			});
		}
	}
}
