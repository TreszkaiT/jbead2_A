import { Injectable } from '@angular/core';
import { OtherSkill } from '../../model/otherskill';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpService } from '../http.service';
import { ConfigService } from '../config.service';

@Injectable({
  providedIn: 'root'
})
export class OtherSkillService {

  public otherSkillObserve: Subject<any> = new Subject()

  currencies: Array<OtherSkill> = []

  otherSkillUrl: string = ''

  lastEditedOtherSkill = <OtherSkill>{}

  constructor(private http: HttpClient, private httpService: HttpService, private config: ConfigService) { 
    this.otherSkillUrl = this.config.get('apiUrl') + "/otherSkill"                            // ez itt a server mappán belül lévő /otherSkill.json fájl neve/helye !!!!!!!!!!
    this.getOtherSkillWithObserver()                                                        // már betöltéskor értesüljenek más Components-ek a változásról
  }

  getOtherSkillWithObserver() {
    this.http.get(this.otherSkillUrl + "/all")
      .subscribe(
        (response) => {
          this.currencies = this.jsonToOtherSkill(response)
          this.otherSkillObserve.next(this.currencies)                                      // Component értesítése/frissítése itt történik 
        },
        (error) => {
          this.otherSkillObserve.error("Error in Observe")
        }
      )
  }

  jsonToOtherSkill(otherSkillArray: any): OtherSkill[] {
    let currencies1: Array<OtherSkill> = []
    
    for(let otherSkill of otherSkillArray){
      let newOtherSkill = new OtherSkill()
      newOtherSkill.fromObject(otherSkill)
      currencies1.push(newOtherSkill)
    }    
    return currencies1
  }

  addOtherSkill(otherSkill: OtherSkill){
    return new Promise( (resolve, reject) => {
      this.httpService.create(`${this.otherSkillUrl}`, otherSkill)
        .then(
          (response) => {
            this.getOtherSkillWithObserver()
            resolve('OtherSkill add')
          }
        )
    })
  }

  updateOtherSkill(otherSkill: OtherSkill){
    return new Promise( (resolve, reject) => {
      this.httpService.update(`${this.otherSkillUrl}/${otherSkill.id}`, otherSkill)
        .then(
          (response) => { 
            this.getOtherSkillWithObserver() 
            resolve('OtherSkill updated')
          }
        )
    })
  }

  deleteOtherSkill(otherSkill: OtherSkill){
    return new Promise( (resolve, reject) => {
      this.httpService.delete(`${this.otherSkillUrl}/${otherSkill.id}`)
        .then(
          (response) => { 
            this.getOtherSkillWithObserver() 
            resolve('OtherSkill deleted')
          }
        )
    })
  }

  readOtherSkillOne(one: boolean, id?: string){
    let urls: string = ""
    if(one) urls = this.otherSkillUrl + "/" + id
    else urls = this.otherSkillUrl + "/all"

    return new Promise( (resolve, reject) => {
      this.httpService.read(urls)
        .then(
          (response) => {
            this.getOtherSkillWithObserver()
            resolve(response)
          }
        )
    })
  }

  getLastEditedOtherSkill(){
    return this.lastEditedOtherSkill
  }

}
