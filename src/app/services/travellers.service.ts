import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TravellersService {
  token: string | null;

  constructor(private http: HttpClient) {
    this.token = localStorage.getItem('token');
  }
  getTravellersList(): Observable<any> {
    const params: any = { "access_token": this.token }
    return this.http.get(`${baseUrl}profils_v2/v1/profil/booking-rules/travellers-list`,
      { params }
    );
  }
}
