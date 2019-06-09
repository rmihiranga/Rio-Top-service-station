import { Injectable } from '@angular/core';
import { HttpClient,HttpResponse,HttpHeaders } from '@angular/common/http';
import { Post } from './post';
import { Observable, forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private geturl = "http://localhost:3000/api/posts/";
  private posturl = "http://localhost:3000/api/sdpost/";
  private deleteurl = "http://localhost:3000/api/delpost";
  private editurl = "http://localhost:3000/api/post";
  private url = "http://localhost:3000/api";
  //private url2 = "http://localhost:3000/api2";

  constructor(private http : HttpClient) { }  //instance of an http to send get requests

    getposts (): Observable<Post[]> {
      console.log("get");
      return this.http.get<Post[]>(this.geturl)
    }

   /*-----This is another alternative method----*/
    /*getposts(): Observable<Post[]> {   
      console.log("post hhhh");
      return this.http.get<HttpResponse<any>>(this.geturl).pipe(
        map(response => response.body)
      );
    }*/

    addposts (post:Post){
      console.log("add");
      return this.http.post(this.posturl,post)
        .subscribe(res=>console.log('done adding'));
    }

    deleteposts(id){
      console.log("delete");
      return this.http.delete(`${this.deleteurl}/${id}`);
    }

    updateposts(id,content){
      console.log("edit");
      const obj ={
        content : content, 
      };
      return this.http.put(`${this.editurl}/${id}`,obj)
      .subscribe(res => console.log("Done updating"));
    }
/*--------------------------------------------------------------------------*/

    public getcount():Observable<any[]>{
      let res1= this.http.get(`${this.url}/count1`);
      let res2= this.http.get(`${this.url}/count2`);
      let res3= this.http.get(`${this.url}/count3`);
      let res4= this.http.get(`${this.url}/count4`)
      return forkJoin([res1,res2,res3,res4]);
    }

    
}
