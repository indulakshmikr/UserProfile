import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { Observable, map } from 'rxjs';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  url: string = '../../assets/data.json';
  usersData:User[] = [];

  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(this.url);
  }

  getUserById(userId: number): Observable<User | any>{
    return this.getUsers().pipe(
      map(users => users.find(user => user.id === userId))
    )
  }
}
