import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
	providedIn: "root",
})
export class LibraryService {
	private librariesUrl = "assets/libraries.json";
	private booksUrl = "assets/books.json";

	constructor(private http: HttpClient) {}

	getLibraries(): Observable<any> {
		return this.http.get<any>(this.librariesUrl);
	}
	getBooks(): Observable<any> {
		return this.http.get<any>(this.booksUrl);
	}
	addBook(book: any): Observable<any> {
		const headers = new HttpHeaders({ "Content-Type": "application/json" });
		return this.http.post<any>(this.booksUrl, book, { headers });
	}
	assignBookToLibraries(
		bookId: number,
		libraryIds: number[]
	): Observable<any> {
		// Logic to update book's library associations
		// Replace with actual API URL and method
		return this.http.post<any>(`${this.booksUrl}/${bookId}/assign`, {
			libraryIds,
		});
	}
}
