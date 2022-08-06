import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { User } from '../models/user';


@Injectable({
    providedIn: 'root'
})

export class apiservice {
    httpClient: any;
    constructor(private http: HttpClient) { }

    getUsers() {
        return this.http.get<any>("http://localhost:8080/api/user")
            .pipe(map((res: any) => {
                return res;
            })
            )
    }

    // AddStaff(body:any){
    //     this.http.post(this.url,body)
    //     .subscribe(
    //       response => {
    //       console.log(response)
    //       return(response)
    //     },
    //     e => {
    //       console.log(e.error); 
    //       this.popup.SetPopup(true,e.error)
    //       let result = e.status} 
    //     )
    //   }
    // Observable<User>
    saveUser(user: User)  {
        console.log(user)

        const httpOptions = {
            headers: new HttpHeaders({
                'Content-type': 'application/json',
                'Authorization': 'auth-token',
                'Access-Control-Allow-Origin': '*'
            })
        };
         this.http.post<User>("http://localhost:8080/api/user",user,httpOptions)
        .subscribe(
            response => {
            console.log(response)
            return(response)
          },
          e => {
            console.log(e.error); 
            
            let result = e.status} 
          )
    }

}