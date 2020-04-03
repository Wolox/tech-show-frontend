import { Injectable } from "@angular/core";
import { HttpClient, HttpResponse } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable()
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  login(user): Observable<HttpResponse<any>> {
    return this.httpClient.post<any>(
      `${environment.baseURL}/users/login`,
      user,
      { observe: "response" }
    );
  }

  getToken() {
    return localStorage.getAuthToken();
  }

  setToken(token) {
    localStorage.authToken = token;
  }

  isLogged(): boolean {
    return !!this.getToken();
  }
}
