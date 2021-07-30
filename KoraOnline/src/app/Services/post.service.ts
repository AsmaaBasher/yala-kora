import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Ipost } from '../viewModels/Interfaces/ipost';


@Injectable({
  providedIn: 'root'
})
export class PostService {
  // private services : Ipost[];
  // today:number =Date.now();
  constructor(private http:HttpClient) {

//  this.services =[
//    {id:1,title: "first image" ,date:this.today,img:"http://placehold.it/900x300" },
//    {id:2,title: "Second image" ,date:this.today,img:"http://placehold.it/900x300" },
//    {id:3,title: "third image" ,date:this.today,img:"http://placehold.it/900x300" },
//    {id:4,title: "forth image" ,date:this.today,img:"http://placehold.it/900x300" },
//    {id:5,title: "fifth image" ,date:this.today,img:"http://placehold.it/900x300" },
//    {id:6,title: "Sixth image" ,date:this.today,img:"http://placehold.it/900x300" }
// ] 
  }


getAllposts():Observable<Ipost[]>{
    
  return this.http.get<Ipost[]>(`${environment.ApiURl}/posts`);

 }

 getPostByID(pID:number):any{
  return this.http.get(`${environment.ApiURl}/posts/${pID}`);
  
}


}

