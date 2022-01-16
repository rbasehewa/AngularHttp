import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../interface/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl= environment.apiUrl; // create an environment variable
  readonly moreParams = ['test1','test2']

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]>{
    // let myHeaders = new HttpHeaders({'myheader': ['headervalue1','headervalue2']});
    // myHeaders = myHeaders.set('id','1234'); // set override
    // myHeaders = myHeaders.append('id','8888'); // append adding another value
    // let myParams = new HttpParams({});
    // myParams = myParams.append('name','ryan');
    // myParams = myParams.append('name','jon');
    const theParams = {['testList']: this.moreParams};
    //let myParams = new HttpParams({fromObject: theParams}); // from object this params has done
    let myParams = new HttpParams({fromString:'name=ryan&id=10'}); // from object this params has done
    return this.http.get<User[]>(`${this.apiUrl}/users`,{params:myParams});
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
