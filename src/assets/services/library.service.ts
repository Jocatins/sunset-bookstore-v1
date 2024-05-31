import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../../environment";

@Injectable({
	providedIn: "root",
})
export class LibraryService {
	private apiUrl = environment.apiUrl;

	constructor(private http: HttpClient) {}

	getLibraries(): Observable<any> {
		return this.http.get<any>(`${this.apiUrl}/libraries`);
	}
	getLibraryById(id: number): Observable<any> {
		return this.http.get<any>(`${this.apiUrl}/libraries/${id}`);
	}

	getBooks(): Observable<any> {
		return this.http.get<any>(`${this.apiUrl}/books`);
	}

	addBook(book: any): Observable<any> {
		const headers = new HttpHeaders({ "Content-Type": "application/json" });
		return this.http.post<any>(`${this.apiUrl}/books`, book, { headers });
	}

	assignBookToLibrary(libraryId: number, book: any): Observable<any> {
		const headers = new HttpHeaders({ "Content-Type": "application/json" });
		return this.http.post<any>(
			`${this.apiUrl}/libraries/${libraryId}/books`,
			book,
			{ headers }
		);
	}
	addLibrary(library: any): Observable<any> {
		const headers = new HttpHeaders({ "Content-Type": "application/json" });
		return this.http.post<any>(`${this.apiUrl}/libraries`, library, {
			headers,
		});
	}
	deleteLibrary(id: number): Observable<any> {
		return this.http.delete<any>(`${this.apiUrl}/libraries/${id}`);
	}
	editLibrary(id: number, updatedLibrary: any): Observable<any> {
		const headers = new HttpHeaders({ "Content-Type": "application/json" });
		return this.http.put<any>(
			`${this.apiUrl}/libraries/${id}`,
			updatedLibrary,
			{ headers }
		);
	}
	getBookById(id: number): Observable<any> {
		return this.http.get<any>(`${this.apiUrl}/books/${id}`);
	}
	editBook(id: number, updatedBook: any): Observable<any> {
		const headers = new HttpHeaders({ "Content-Type": "application/json" });
		return this.http.put<any>(`${this.apiUrl}/books/${id}`, updatedBook, {
			headers,
		});
	}
}
