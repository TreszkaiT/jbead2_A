import { Injectable } from '@angular/core';
import { Picture } from '../../model/picture';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpService } from '../http.service';
import { ConfigService } from '../config.service';

@Injectable({
  providedIn: 'root'
})
export class PictureService {

  public pictureObserve: Subject<any> = new Subject()

  currencies: Array<Picture> = []

  pictureUrl: string = ''

  lastEditedPicture = <Picture>{}

  constructor(private http: HttpClient, private httpService: HttpService, private config: ConfigService) { 
    this.pictureUrl = this.config.get('apiUrl') + "/picture"                            // ez itt a server mappán belül lévő /picture.json fájl neve/helye !!!!!!!!!!
    this.getPictureWithObserver()                                                        // már betöltéskor értesüljenek más Components-ek a változásról
  }

  getPictureWithObserver() {
    this.http.get(this.pictureUrl + "/all")
      .subscribe(
        (response) => {
          this.currencies = this.jsonToPicture(response)
          this.pictureObserve.next(this.currencies)                                      // Component értesítése/frissítése itt történik 
        },
        (error) => {
          this.pictureObserve.error("Error in Observe")
        }
      )
  }

  jsonToPicture(pictureArray: any): Picture[] {
    let currencies1: Array<Picture> = []
    
    for(let picture of pictureArray){
      let newPicture = new Picture()
      newPicture.fromObject(picture)
      currencies1.push(newPicture)
    }    
    return currencies1
  }

  addPicture(picture: Picture){
    return new Promise( (resolve, reject) => {
      this.httpService.create(`${this.pictureUrl}`, picture)
        .then(
          (response) => {
            this.getPictureWithObserver()
            resolve('Picture add')
          }
        )
    })
  }

  updatePicture(picture: Picture){
    return new Promise( (resolve, reject) => {
      this.httpService.update(`${this.pictureUrl}/${picture.id}`, picture)
        .then(
          (response) => { 
            this.getPictureWithObserver() 
            resolve('Picture updated')
          }
        )
    })
  }

  deletePicture(picture: Picture){
    return new Promise( (resolve, reject) => {
      this.httpService.delete(`${this.pictureUrl}/${picture.id}`)
        .then(
          (response) => { 
            this.getPictureWithObserver() 
            resolve('Picture deleted')
          }
        )
    })
  }

  readPictureOne(one: boolean, id?: string){
    let urls: string = ""
    if(one) urls = this.pictureUrl + "/" + id
    else urls = this.pictureUrl + "/all"

    return new Promise( (resolve, reject) => {
      this.httpService.read(urls)
        .then(
          (response) => {
            this.getPictureWithObserver()
            resolve(response)
          }
        )
    })
  }

  getLastEditedPicture(){
    return this.lastEditedPicture
  }

}
