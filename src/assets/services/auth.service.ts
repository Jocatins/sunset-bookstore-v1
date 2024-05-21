import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, BehaviorSubject } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
	providedIn: "root",
})
export class AuthService {
	private apiUrl = "http://localhost:4500";
	private currentUserSubject: BehaviorSubject<any>;
	public currentUser: Observable<any>;

	constructor(private http: HttpClient) {
		const storedUser = localStorage.getItem("currentUser");
		this.currentUserSubject = new BehaviorSubject<any>(
			storedUser ? JSON.parse(storedUser) : null
		);
		this.currentUser = this.currentUserSubject.asObservable();
	}

	public get currentUserValue(): any {
		return this.currentUserSubject.value;
	}

	login(username: string, password: string) {
		return this.http
			.get<any[]>(
				`${this.apiUrl}/users?username=${username}&password=${password}`
			)
			.pipe(
				map((users) => {
					if (users.length > 0) {
						const user = users[0];
						localStorage.setItem(
							"currentUser",
							JSON.stringify(user)
						);
						this.currentUserSubject.next(user);
						return user;
					} else {
						throw new Error("Username or password is incorrect");
					}
				})
			);
	}

	logout() {
		// remove user from local storage to log user out
		localStorage.removeItem("currentUser");
		this.currentUserSubject.next(null);
	}

	register(username: string, password: string) {
		const newUser = { username, password, token: `${username}-token` };
		return this.http.post<any>(`${this.apiUrl}/users`, newUser);
	}

	isAuthenticated(): boolean {
		return !!this.currentUserValue;
	}
}
