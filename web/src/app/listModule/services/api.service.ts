import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IItemListResponse } from 'src/app/sharedModule/models';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = environment.baseURL;
  constructor(private http:HttpClient) { }
  public getAllItems(){
    return this.http.get<IItemListResponse>(`${this.apiUrl}items`);
  }


}
