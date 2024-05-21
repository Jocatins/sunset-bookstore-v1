import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
	providedIn: "root",
})
export class BookService {
	private apiUrl = "http://localhost:3000";

	constructor(private http: HttpClient) {}

	getBooks(): Observable<any> {
		return this.http.get<any>(`${this.apiUrl}/books`);
	}

	addBook(book: any): Observable<any> {
		const headers = new HttpHeaders({ "Content-Type": "application/json" });
		return this.http.post<any>(this.apiUrl, book, { headers });
	}
}
