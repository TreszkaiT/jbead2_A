import { Injectable } from '@angular/core';
import { Study } from '../../model/study';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpService } from '../http.service';
import { ConfigService } from '../config.service';

@Injectable({
  providedIn: 'root'
})
export class StudyService {

  public studyObserve: Subject<any> = new Subject()

  currencies: Array<Study> = []

  studyUrl: string = ''

  lastEditedStudy = <Study>{}

  constructor(private http: HttpClient, private httpService: HttpService, private config: ConfigService) { 
    this.studyUrl = this.config.get('apiUrl') + "/study"                            // ez itt a server mappán belül lévő /study.json fájl neve/helye !!!!!!!!!!
    this.getStudyWithObserver()                                                        // már betöltéskor értesüljenek más Components-ek a változásról
  }

  getStudyWithObserver() {
    this.http.get(this.studyUrl + "/all")
      .subscribe(
        (response) => {
          this.currencies = this.jsonToStudy(response)
          this.studyObserve.next(this.currencies)                                      // Component értesítése/frissítése itt történik 
        },
        (error) => {
          this.studyObserve.error("Error in Observe")
        }
      )
  }

  jsonToStudy(studyArray: any): Study[] {
    let currencies1: Array<Study> = []
    
    for(let study of studyArray){
      let newStudy = new Study()
      newStudy.fromObject(study)
      currencies1.push(newStudy)
    }    
    return currencies1
  }

  addStudy(study: Study){
    return new Promise( (resolve, reject) => {
      this.httpService.create(`${this.studyUrl}`, study)
        .then(
          (response) => {
            this.getStudyWithObserver()
            resolve('Study add')
          }
        )
    })
  }

  updateStudy(study: Study){
    return new Promise( (resolve, reject) => {
      this.httpService.update(`${this.studyUrl}/${study.id}`, study)
        .then(
          (response) => { 
            this.getStudyWithObserver() 
            resolve('Study updated')
          }
        )
    })
  }

  deleteStudy(study: Study){
    return new Promise( (resolve, reject) => {
      this.httpService.delete(`${this.studyUrl}/${study.id}`)
        .then(
          (response) => { 
            this.getStudyWithObserver() 
            resolve('Study deleted')
          }
        )
    })
  }

  readStudyOne(one: boolean, id?: string){
    let urls: string = ""
    if(one) urls = this.studyUrl + "/" + id
    else urls = this.studyUrl + "/all"

    return new Promise( (resolve, reject) => {
      this.httpService.read(urls)
        .then(
          (response) => {
            this.getStudyWithObserver()
            resolve(response)
          }
        )
    })
  }

  getLastEditedStudy(){
    return this.lastEditedStudy
  }

}
