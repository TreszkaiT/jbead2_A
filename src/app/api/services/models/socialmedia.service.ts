import { Injectable } from '@angular/core';
import { SocialMedia } from '../../model/socialmedia';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpService } from '../http.service';
import { ConfigService } from '../config.service';

@Injectable({
  providedIn: 'root'
})
export class SocialMediaService {

  public socialMediaObserve: Subject<any> = new Subject()

  currencies: Array<SocialMedia> = []

  socialMediaUrl: string = ''

  lastEditedSocialMedia = <SocialMedia>{}

  constructor(private http: HttpClient, private httpService: HttpService, private config: ConfigService) { 
    this.socialMediaUrl = this.config.get('apiUrl') + "/socialMedia"                            // ez itt a server mappán belül lévő /socialMedia.json fájl neve/helye !!!!!!!!!!
    this.getSocialMediaWithObserver()                                                        // már betöltéskor értesüljenek más Components-ek a változásról
  }

  getSocialMediaWithObserver() {
    this.http.get(this.socialMediaUrl + "/all")
      .subscribe(
        (response) => {
          this.currencies = this.jsonToSocialMedia(response)
          this.socialMediaObserve.next(this.currencies)                                      // Component értesítése/frissítése itt történik 
        },
        (error) => {
          this.socialMediaObserve.error("Error in Observe")
        }
      )
  }

  jsonToSocialMedia(socialMediaArray: any): SocialMedia[] {
    let currencies1: Array<SocialMedia> = []
    
    for(let socialMedia of socialMediaArray){
      let newSocialMedia = new SocialMedia()
      newSocialMedia.fromObject(socialMedia)
      currencies1.push(newSocialMedia)
    }    
    return currencies1
  }

  addSocialMedia(socialMedia: SocialMedia){
    return new Promise( (resolve, reject) => {
      this.httpService.create(`${this.socialMediaUrl}`, socialMedia)
        .then(
          (response) => {
            this.getSocialMediaWithObserver()
            resolve('SocialMedia add')
          }
        )
    })
  }

  updateSocialMedia(socialMedia: SocialMedia){
    return new Promise( (resolve, reject) => {
      this.httpService.update(`${this.socialMediaUrl}/${socialMedia.id}`, socialMedia)
        .then(
          (response) => { 
            this.getSocialMediaWithObserver() 
            resolve('SocialMedia updated')
          }
        )
    })
  }

  deleteSocialMedia(socialMedia: SocialMedia){
    return new Promise( (resolve, reject) => {
      this.httpService.delete(`${this.socialMediaUrl}/${socialMedia.id}`)
        .then(
          (response) => { 
            this.getSocialMediaWithObserver() 
            resolve('SocialMedia deleted')
          }
        )
    })
  }

  readSocialMediaOne(one: boolean, id?: string){
    let urls: string = ""
    if(one) urls = this.socialMediaUrl + "/" + id
    else urls = this.socialMediaUrl + "/all"

    return new Promise( (resolve, reject) => {
      this.httpService.read(urls)
        .then(
          (response) => {
            this.getSocialMediaWithObserver()
            resolve(response)
          }
        )
    })
  }

  getLastEditedSocialMedia(){
    return this.lastEditedSocialMedia
  }

}
