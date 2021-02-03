import { environment } from './../../environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { ISurvey } from './survey.interface';

@Injectable({
  providedIn: 'root'
})
export class SurveyService {

  constructor(private http: HttpClient) { }

  get(): Observable<ISurvey> {
    var url = `${environment.urlBase}/surveys/${environment.surveyId}`;

    return this.http
      .get<ISurvey>(url)
      .pipe(catchError((error) => this.handleHttpError(error)));
  }

  private handleHttpError( error: HttpErrorResponse): Observable<any> {
    console.log("ERROR => ", error);
    return throwError(error);
  }
}
