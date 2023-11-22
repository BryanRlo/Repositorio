import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse } from './models/Rutas.models';


@Injectable({
  providedIn: 'root'
})
export class GetRutasService {
  private apiurl = 'http://localhost:5020/api/Rutas/Get_Rutas';

  constructor(private http: HttpClient) { }

  GetRutas(): Observable<ApiResponse>{
    const requestBody = {"Estatus": "1"};
    return this.http.post<ApiResponse>(this.apiurl, requestBody);
  }
}