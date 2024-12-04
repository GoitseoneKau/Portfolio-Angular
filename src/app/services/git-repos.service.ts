import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GitReposService {
  
  private git_url = "https://api.github.com/users/GoitseoneKau/repos"

  constructor(private httpClient:HttpClient) { }

  getRepos():Observable<Repo[]>{
    
    return this.httpClient.get<Repo[]>(this.git_url)
    .pipe(
      map((repos)=>repos.map((repo)=>repo={id:repo.id,name:repo.name,html_url:repo.html_url,homepage:repo.homepage,created_at:repo.created_at}).filter((repo)=>repo.id>=794000000)),
    )
  }

}


export interface Repo{
  created_at: Date;
  id:number,
  name:string,
  html_url:string,
  homepage:string,
  image?:string,
  description?:any
}