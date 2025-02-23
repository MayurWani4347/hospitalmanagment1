import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService {
  private apiUrl = 'http://localhost:8083/api/users';
  constructor(private http: HttpClient) {}

  signup(userData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/signup`, userData);
  }

  login(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, user);
  }

  forgetPassword(email: string): Observable<string> {
    const params = new HttpParams().set('email', email);
    return this.http.post(this.apiUrl + '/forget-password', null, { params, responseType: 'text' });
  }

  resetPassword(token: string, newPassword: string): Observable<string> {
    const params = new HttpParams()
      .set('token', token)
      .set('newPassword', newPassword);
    return this.http.post(this.apiUrl + '/reset-password', null, { params, responseType: 'text' });
  }
}