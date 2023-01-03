import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private http:HttpClient) { }

  public newsurl = "https://newsapi.org/v2/top-headlines?country=in&apiKey=fe9f6c2360614fad96e4c41d6a37caa6";

  public businessurl = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=fe9f6c2360614fad96e4c41d6a37caa6";
  

  topheading():Observable<any> {
    return this.http.get(this.newsurl);
  }
  business():Observable<any> {
    return this.http.get(this.businessurl);
  }
 

}
