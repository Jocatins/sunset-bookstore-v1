import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, switchMap } from "rxjs/operators";
import { Library } from "../models/Library";
import { Book } from "../models/Book";
import { environment } from "../../../environment";

const httpOptions = {
	headers: new HttpHeaders({ "Content-Type": "application/json" }),
};

@Injectable({
	providedIn: "root",
})
export class BookService {
	// private apiUrl = "http://localhost:3000/libraries";
	private apiUrl = environment.apiUrl;

	constructor(private http: HttpClient) {}

	// getBooks(): Observable<Library[]> {
	// 	return this.http.get<any>(`${this.apiUrl}/books`);
	// }

	// getLibraries(): Observable<Library[]> {
	// 	return this.http
	// 		.get<Library[]>(this.apiUrl)
	// 		.pipe(catchError(this.handleError<Library[]>("getLibraries", [])));
	// }

	// addBook(libraryId: string, book: Book): Observable<Library> {
	// 	return this.http.get<Library>(`${this.apiUrl}/${libraryId}`).pipe(
	// 		switchMap((library) => {
	// 			library.books.push(book);
	// 			return this.http.put<Library>(
	// 				`${this.apiUrl}/${libraryId}`,
	// 				library,
	// 				httpOptions
	// 			);
	// 		}),
	// 		catchError(this.handleError<Library>("addBook"))
	// 	);
	// }

	getBooks(): Observable<Book[]> {
		return this.http
			.get<Book[]>(`${this.apiUrl}/books`)
			.pipe(catchError(this.handleError<Book[]>("getBooks", [])));
	}

	getLibraries(): Observable<Library[]> {
		return this.http
			.get<Library[]>(`${this.apiUrl}/libraries`)
			.pipe(catchError(this.handleError<Library[]>("getLibraries", [])));
	}

	addBook(libraryId: string, book: Book): Observable<Library> {
		return this.http
			.get<Library>(`${this.apiUrl}/libraries/${libraryId}`)
			.pipe(
				switchMap((library) => {
					library.books.push(book);
					return this.http.put<Library>(
						`${this.apiUrl}/libraries/${libraryId}`,
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
