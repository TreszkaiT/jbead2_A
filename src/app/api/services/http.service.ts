import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  baseRequest(url: string, type: string, data?: any) {
    return new Promise((resolve, reject) => {
      if (data) {
        try {
          data = JSON.stringify(data)
        } catch {
          reject('Invalid object')
        }
      } else {
        data = {}
      }

      if (type === 'post' || type === 'put') {
        let headers = new HttpHeaders();
        headers = headers.set('Content-Type', 'application/json; charset=utf-8');               // headers hogy ne text/plain-be küldje a szerver felé, mert úgy nem fogadja el. Hanem json-ban

        this.http[type](url, data, {headers: headers})                                          // és még ide is beírni: {headers: headers}
          .forEach(
            (response) => { resolve(response) }
          )
      } else if (type == 'get' || type === 'delete') {
        this.http[type](url)
          .forEach(
            (response) => { resolve(response) }
          )
      }

    })
  }

  create(url: string, data: any) {
    return this.baseRequest(url, 'post', data)
  }

  read(url: string) {
    return this.baseRequest(url, 'get')
  }

  update(url: string, data: any) {
    return this.baseRequest(url, 'put', data)
  }

  delete(url: string) {
    return this.baseRequest(url, 'delete')
  }
}
