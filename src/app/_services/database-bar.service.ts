import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DefectModel } from "../models/defect";
import { PanelModel } from "../models/panel";


@Injectable({
  providedIn: 'root'
})
export class DatabaseBarService {

  constructor(private http: HttpClient) {  }
  
  getDefects(): Observable<any> {
    return this.http.get("./assets/defects.json");
  }

  getTopPanel(): Observable<any> {
    return this.http.get("./assets/toppanel.json");
  }


}