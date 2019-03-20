import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  regForm: FormGroup = new FormGroup({
    _id: new FormControl(null),
    name: new FormControl('', Validators.required),
    position: new FormControl('', Validators.required),
    office: new FormControl('', Validators.required),
    salary: new FormControl('', Validators.required),
  });
  constructor(private http: HttpClient) { }

  getHttpParams(data: any) {
    let httpParams = new HttpParams();
    Object.keys(data).forEach(function (key) {
      httpParams = httpParams.append(key, data[key]);
    });
    return httpParams;
  }

  get(url, data){
    const httpParams = this.getHttpParams(data);
    return this.http.get('http://172.16.6.154:5000/' + url, { params: httpParams })
  }

  post(url,data){
    return this.http.post('http://172.16.6.154:5000/' + url, data)
  }

  delete(url,id){
    return this.http.delete('http://172.16.6.154:5000/' + url+'/'+id)
  }
  getById(url,id){
    return this.http.get('http://172.16.6.154:5000/' + url+'/'+id)
  }
  put(url,data){
    return this.http.put('http://172.16.6.154:5000/' + url, data)
  }
}
