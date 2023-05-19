import { Injectable } from '@angular/core';
import { MessageApp } from '../../model/messageapp';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpService } from '../http.service';
import { ConfigService } from '../config.service';

@Injectable({
  providedIn: 'root'
})
export class MessageAppService {

  public messageAppObserve: Subject<any> = new Subject()

  currencies: Array<MessageApp> = []

  messageAppUrl: string = ''

  lastEditedMessageApp = <MessageApp>{}

  constructor(private http: HttpClient, private httpService: HttpService, private config: ConfigService) { 
    this.messageAppUrl = this.config.get('apiUrl') + "/messageApp"                            // ez itt a server mappán belül lévő /messageApp.json fájl neve/helye !!!!!!!!!!
    this.getMessageAppWithObserver()                                                        // már betöltéskor értesüljenek más Components-ek a változásról
  }

  getMessageAppWithObserver() {
    this.http.get(this.messageAppUrl + "/all")
      .subscribe(
        (response) => {
          this.currencies = this.jsonToMessageApp(response)
          this.messageAppObserve.next(this.currencies)                                      // Component értesítése/frissítése itt történik 
        },
        (error) => {
          this.messageAppObserve.error("Error in Observe")
        }
      )
  }

  jsonToMessageApp(messageAppArray: any): MessageApp[] {
    let currencies1: Array<MessageApp> = []
    
    for(let messageApp of messageAppArray){
      let newMessageApp = new MessageApp()
      newMessageApp.fromObject(messageApp)
      currencies1.push(newMessageApp)
    }    
    return currencies1
  }

  addMessageApp(messageApp: MessageApp){
    return new Promise( (resolve, reject) => {
      this.httpService.create(`${this.messageAppUrl}`, messageApp)
        .then(
          (response) => {
            this.getMessageAppWithObserver()
            resolve('MessageApp add')
          }
        )
    })
  }

  updateMessageApp(messageApp: MessageApp){
    return new Promise( (resolve, reject) => {
      this.httpService.update(`${this.messageAppUrl}/${messageApp.id}`, messageApp)
        .then(
          (response) => { 
            this.getMessageAppWithObserver() 
            resolve('MessageApp updated')
          }
        )
    })
  }

  deleteMessageApp(messageApp: MessageApp){
    return new Promise( (resolve, reject) => {
      this.httpService.delete(`${this.messageAppUrl}/${messageApp.id}`)
        .then(
          (response) => { 
            this.getMessageAppWithObserver() 
            resolve('MessageApp deleted')
          }
        )
    })
  }

  readMessageAppOne(one: boolean, id?: string){
    let urls: string = ""
    if(one) urls = this.messageAppUrl + "/" + id
    else urls = this.messageAppUrl + "/all"

    return new Promise( (resolve, reject) => {
      this.httpService.read(urls)
        .then(
          (response) => {
            this.getMessageAppWithObserver()
            resolve(response)
          }
        )
    })
  }

  getLastEditedMessageApp(){
    return this.lastEditedMessageApp
  }

}
