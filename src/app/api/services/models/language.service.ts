import { Injectable } from '@angular/core';
import { Language } from '../../model/language';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpService } from '../http.service';
import { ConfigService } from '../config.service';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  public languageObserve: Subject<any> = new Subject()

  currencies: Array<Language> = []

  languageUrl: string = ''

  lastEditedLanguage = <Language>{}

  constructor(private http: HttpClient, private httpService: HttpService, private config: ConfigService) { 
    this.languageUrl = this.config.get('apiUrl') + "/language"                            // ez itt a server mappán belül lévő /language.json fájl neve/helye !!!!!!!!!!
    this.getLanguageWithObserver()                                                        // már betöltéskor értesüljenek más Components-ek a változásról
  }

  getLanguageWithObserver() {
    this.http.get(this.languageUrl + "/all")
      .subscribe(
        (response) => {
          this.currencies = this.jsonToLanguage(response)
          this.languageObserve.next(this.currencies)                                      // Component értesítése/frissítése itt történik 
        },
        (error) => {
          this.languageObserve.error("Error in Observe")
        }
      )
  }

  jsonToLanguage(languageArray: any): Language[] {
    let currencies1: Array<Language> = []
    
    for(let language of languageArray){
      let newLanguage = new Language()
      newLanguage.fromObject(language)
      currencies1.push(newLanguage)
    }    
    return currencies1
  }

  addLanguage(language: Language){
    return new Promise( (resolve, reject) => {
      this.httpService.create(`${this.languageUrl}`, language)
        .then(
          (response) => {
            this.getLanguageWithObserver()
            resolve('Language add')
          }
        )
    })
  }

  updateLanguage(language: Language){
    return new Promise( (resolve, reject) => {
      this.httpService.update(`${this.languageUrl}/${language.id}`, language)
        .then(
          (response) => { 
            this.getLanguageWithObserver() 
            resolve('Language updated')
          }
        )
    })
  }

  deleteLanguage(language: Language){
    return new Promise( (resolve, reject) => {
      this.httpService.delete(`${this.languageUrl}/${language.id}`)
        .then(
          (response) => { 
            this.getLanguageWithObserver() 
            resolve('Language deleted')
          }
        )
    })
  }

  readLanguageOne(one: boolean, id?: string){
    let urls: string = ""
    if(one) urls = this.languageUrl + "/" + id
    else urls = this.languageUrl + "/all"

    return new Promise( (resolve, reject) => {
      this.httpService.read(urls)
        .then(
          (response) => {
            this.getLanguageWithObserver()
            resolve(response)
          }
        )
    })
  }

  getLastEditedLanguage(){
    return this.lastEditedLanguage
  }

}
