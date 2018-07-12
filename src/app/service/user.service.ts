import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {UserModel} from '../mock-data/userInfo';
import {catchError} from 'rxjs/operators';
import {HandleError, HttpErrorHandler} from './http-error-handler.service';

const api_url = environment.apiUrl;
const httpOptions = {
  headers: new HttpHeaders(
    { 'Content-Type': 'application/json' })
};

@Injectable()
export class UserService {
  private handleError: HandleError;

  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandler
  ) {
    this.handleError = httpErrorHandler.createHandleError('UserService');
  }


  /**POST a new user */
  addUser(user: UserModel): Observable<any> {
    return this.http.post<any>(api_url + '/User', user, httpOptions)
      .pipe(
        catchError(this.handleError('addUser', user))
      );
  }


  /**PATCH user profile information */
  updateUser(id: number, user: any): Observable<any> {
    return this.http.patch<any>(api_url + '/User/' + id, user, httpOptions)
      .pipe(
        catchError(this.handleError('updateuser', user))
      );
  }


  /**GET all user list */
  getAllUsers(): Observable<any[]> {
    return this.http.get<any[]>(api_url + '/User')
      .pipe(
        catchError(this.handleError('getAllUsers', []))
      )
  }


  /**GET user information by id */
  getUserById(id: number): Observable<any> {
    return this.http.get<any>(api_url + '/User/' + id)
      .pipe(
        catchError(this.handleError('getUserById', id))
      )
  }
}


