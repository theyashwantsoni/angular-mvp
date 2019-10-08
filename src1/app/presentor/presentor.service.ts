// import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { StateService } from '../core/state/state.service';
import { ApiService } from '../core/api/api.service';
@Injectable({
  providedIn: 'root'
})
export class PresentorService {

  constructor(private ss : StateService,private as:ApiService ) { }
  sendAuthData(arg:any ) :Observable<any>{
    return this.as.login(arg);
  }
}
