import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse } from './models/Clientes.models';


@Injectable({
  providedIn: 'root'
})
export class GetClientesService {
  private apiurl = 'http://localhost:5020/api/Clientes/Get_Clientes';

  constructor(private http: HttpClient) { }

  GetClientes(): Observable<ApiResponse>{
    const requestBody = {"Estatus": "1"};
    return this.http.post<ApiResponse>(this.apiurl, requestBody);
  }
}