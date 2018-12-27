import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable()
export class HomeService {

  urlBase = 'http://gateway.marvel.com/v1/public/comics'
  
  constructor(private http: HttpClient) { }
  /**
   * 
   * @param offset - Number
   * Return a http request
   */
  getCommics (offset = 0)  {
    return this.http.get(`${this.urlBase}?ts=1&apikey=${environment.apiPublicKey}&hash=${environment.apiHashKey}&limit=50&offset=${offset}`)
  }
}