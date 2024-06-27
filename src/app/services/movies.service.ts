import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RespuestaMDB } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }


  getFeature(){
    return this.http.get<RespuestaMDB>('https://api.themoviedb.org/3/discover/movie?api_key=2057d92cb07c91a29fd2f30dae4f3fe3&primary_release_date.gte=2024-05-10&primary_release_date.lte=2024-06-10&language=es');
  }

}
