import { LibraryService } from "./../../../assets/services/library.service";
import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { Library } from "../../../assets/models/Library";
import { CommonModule } from "@angular/common";
import {
	ReactiveFormsModule,
	FormBuilder,
	FormGroup,
	Validators,
} from "@angular/forms";

function generateId(): string {
	const randomNumber = Math.floor(Math.random() * 90000) + 10000;
	return randomNumber.toString();
}
@Component({
	selector: "app-modal",
	standalone: true,
	imports: [CommonModule, ReactiveFormsModule],
	templateUrl: "./modal.component.html",
	styleUrl: "./modal.component.css",
})
export class ModalComponent implements OnInit {
	@Output() close = new EventEmitter<void>();
	libraries: Library[] = [];
	addLibraryForm!: FormGroup;

	newLibrary: Library = {
		id: generateId(),
		name: "",
		location: "",
		books: [],
	};

	constructor(
		private libraryService: LibraryService,
		private fb: FormBuilder
	) {}

	ngOnInit(): void {
		this.addLibraryForm = this.fb.group({
			id: [generateId()],
			name: ["", [Validators.required, Validators.minLength(5)]],
			location: ["", [Validators.required, Validators.minLength(5)]],
			books: [[]],
		});
	}

	closeModal(): void {
		this.close.emit();
	}

	public addLibrary(): void {
		if (this.addLibraryForm.valid) {
			const newLibrary: Library = this.addLibraryForm.value;
			this.libraryService.addLibrary(newLibrary).subscribe(
				(response) => {
					console.log("Library added successfully", response);
					this.libraries.push(response);
					this.addLibraryForm.reset({ id: generateId(), books: [] }); // Reset the form
					this.closeModal();
				},
				(error) => {
					console.error("Error adding library", error);
				}
			);
		}
	}
}
