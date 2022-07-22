import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IMasterDataResponse } from '../models';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private apiUrl:string = environment.baseURL;
  constructor( private http:HttpClient) { }
  getMasterData(){
    return this.http.get<IMasterDataResponse>(`${this.apiUrl}masterdata`);
  }
}
