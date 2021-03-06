import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../interface/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl= environment.apiUrl; // create an environment variable

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(`${this.apiUrl}/users`);
  }

  getUser(): Observable<User>{
    return this.http.get<User>(`${this.apiUrl}/users/1`);
  }

  createUser(user: User): Observable<User>{ // post method
    return this.http.post<User>(`${this.apiUrl}/users`,user); // pass this user for payload
  }

  updateUser(user: User): Observable<User>{ // Put method - need to send entire data
    return this.http.put<User>(`${this.apiUrl}/users/${user.id}`,user); // pass this user for payload
  }

  patchUser(user: User): Observable<User>{ // Patch method - No need to send entire data, can send one property
    return this.http.patch<User>(`${this.apiUrl}/users/${user.id}`,user); // pass this user for payload
  }

  deleteUser(id: number): Observable<unknown>{ // Delete method - sending only ID
    return this.http.delete<unknown>(`${this.apiUrl}/users/${id}`); // pass user id
  }
}
