import { Injectable } from '@angular/core';
import { Phone } from '../../model/phone';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpService } from '../http.service';
import { ConfigService } from '../config.service';

@Injectable({
  providedIn: 'root'
})
export class PhoneService {

  public phoneObserve: Subject<any> = new Subject()

  currencies: Array<Phone> = []

  phoneUrl: string = ''

  lastEditedPhone = <Phone>{}

  constructor(private http: HttpClient, private httpService: HttpService, private config: ConfigService) { 
    this.phoneUrl = this.config.get('apiUrl') + "/phone"                            // ez itt a server mappán belül lévő /phone.json fájl neve/helye !!!!!!!!!!
    this.getPhoneWithObserver()                                                        // már betöltéskor értesüljenek más Components-ek a változásról
  }

  getPhoneWithObserver() {
    this.http.get(this.phoneUrl + "/all")
      .subscribe(
        (response) => {
          this.currencies = this.jsonToPhone(response)
          this.phoneObserve.next(this.currencies)                                      // Component értesítése/frissítése itt történik 
        },
        (error) => {
          this.phoneObserve.error("Error in Observe")
        }
      )
  }

  jsonToPhone(phoneArray: any): Phone[] {
    let currencies1: Array<Phone> = []
    
    for(let phone of phoneArray){
      let newPhone = new Phone()
      newPhone.fromObject(phone)
      currencies1.push(newPhone)
    }    
    return currencies1
  }

  addPhone(phone: Phone){
    return new Promise( (resolve, reject) => {
      this.httpService.create(`${this.phoneUrl}`, phone)
        .then(
          (response) => {
            this.getPhoneWithObserver()
            resolve('Phone add')
          }
        )
    })
  }

  updatePhone(phone: Phone){
    return new Promise( (resolve, reject) => {
      this.httpService.update(`${this.phoneUrl}/${phone.id}`, phone)
        .then(
          (response) => { 
            this.getPhoneWithObserver() 
            resolve('Phone updated')
          }
        )
    })
  }

  deletePhone(phone: Phone){
    return new Promise( (resolve, reject) => {
      this.httpService.delete(`${this.phoneUrl}/${phone.id}`)
        .then(
          (response) => { 
            this.getPhoneWithObserver() 
            resolve('Phone deleted')
          }
        )
    })
  }

  readPhoneOne(one: boolean, id?: string){
    let urls: string = ""
    if(one) urls = this.phoneUrl + "/" + id
    else urls = this.phoneUrl + "/all"

    return new Promise( (resolve, reject) => {
      this.httpService.read(urls)
        .then(
          (response) => {
            this.getPhoneWithObserver()
            resolve(response)
          }
        )
    })
  }

  getLastEditedPhone(){
    return this.lastEditedPhone
  }

}
