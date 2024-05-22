import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { map, catchError } from "rxjs/operators";

@Injectable({
	providedIn: "root",
})
export class AuthService {
	private apiUrl = "http://localhost:3000/users";

	constructor(private http: HttpClient) {}

	login(username: string, password: string): Observable<any> {
		const headers = new HttpHeaders({ "Content-Type": "application/json" });
		return this.http
			.post<any>(
				`${this.apiUrl}/login`,
				{ username, password },
				{ headers }
			)
			.pipe(
				map((response) => {
					// Store the token
					localStorage.setItem("auth_token", response.token);
					return response;
				}),
				catchError((error) => {
					console.error("Login error:", error);
					return of(null);
				})
			);
	}

	logout(): void {
		localStorage.removeItem("auth_token");
	}

	getToken(): string | null {
		return localStorage.getItem("auth_token");
	}

	isAuthenticated(): boolean {
		return this.getToken() !== null;
	}

	register(username: string, password: string) {
		const newUser = { username, password, token: `${username}-token` };
		return this.http.post<any>(`${this.apiUrl}/users`, newUser);
	}
}
