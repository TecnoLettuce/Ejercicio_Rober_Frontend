import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UploadServiceService {

  constructor(private http: HttpClient) { }

  upload(formData: FormData) {
    return this.http.post<{ path: string}>(
      'https://localhost:44320/api/Upload',
      // 'https://localhost:5000/api/Upload', 
      formData
    );
  }
}
