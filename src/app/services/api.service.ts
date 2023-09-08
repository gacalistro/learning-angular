import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment.development";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  private baseURL: string = "";
  private apiData: any | null = null;

  constructor(private http: HttpClient) {
    this.baseURL = environment.apiURL;
  }

  getPokemon(pokemonName: string): Observable<any> {
    this.apiData = this.http.get<any>(this.baseURL + pokemonName);

    return this.apiData;
  }
}
