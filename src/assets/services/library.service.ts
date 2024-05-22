import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
	providedIn: "root",
})
export class LibraryService {
	private apiUrl = "http://localhost:3000";

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
}
