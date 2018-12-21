import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable()
export class HomeService {
  // urlBase = `https://gateway.marvel.com:443/v1/public/comics?format=comic&formatType=comic&apikey=${environment.apiPublicKey}`

  offset = 50
  urlBase = `http://gateway.marvel.com/v1/public/comics?ts=1&apikey=${environment.apiPublicKey}&hash=${environment.apiHashKey}&limit=50&offset=${this.offset}`
  
  constructor(private http: HttpClient) {
  }

  getCommics () {
    return this.http.get(this.urlBase)
  }
}