import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, switchMap } from "rxjs/operators";
import { Library } from "../models/Library";
import { Book } from "../models/Book";

const httpOptions = {
	headers: new HttpHeaders({ "Content-Type": "application/json" }),
};

@Injectable({
	providedIn: "root",
})
export class BookService {
	private apiUrl = "http://localhost:3000/libraries";

	constructor(private http: HttpClient) {}

	getBooks(): Observable<Library[]> {
		return this.http.get<any>(`${this.apiUrl}/books`);
	}

	getLibraries(): Observable<Library[]> {
		return this.http
			.get<Library[]>(this.apiUrl)
			.pipe(catchError(this.handleError<Library[]>("getLibraries", [])));
	}

	addBook(libraryId: string, book: Book): Observable<Library> {
		return this.http.get<Library>(`${this.apiUrl}/${libraryId}`).pipe(
			switchMap((library) => {
				library.books.push(book);
				return this.http.put<Library>(
					`${this.apiUrl}/${libraryId}`,
					library,
					httpOptions
				);
			}),
			catchError(this.handleError<Library>("addBook"))
		);
	}
	private handleError<T>(operation = "operation", result?: T) {
		return (error: any): Observable<T> => {
			console.error(`${operation} failed: ${error.message}`);
			return throwError(error);
		};
	}
}
