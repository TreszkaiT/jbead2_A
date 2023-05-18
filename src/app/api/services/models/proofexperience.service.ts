import { Injectable } from '@angular/core';
import { ProofExperience } from '../../model/proofexperience';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpService } from '../http.service';
import { ConfigService } from '../config.service';

@Injectable({
  providedIn: 'root'
})
export class ProofExperienceService {

  public proofExperienceObserve: Subject<any> = new Subject()

  currencies: Array<ProofExperience> = []

  proofExperienceUrl: string = ''

  lastEditedProofExperience = <ProofExperience>{}

  constructor(private http: HttpClient, private httpService: HttpService, private config: ConfigService) { 
    this.proofExperienceUrl = this.config.get('apiUrl') + "/proofExperience"                            // ez itt a server mappán belül lévő /proofExperience.json fájl neve/helye !!!!!!!!!!
    this.getProofExperienceWithObserver()                                                        // már betöltéskor értesüljenek más Components-ek a változásról
  }

  getProofExperienceWithObserver() {
    this.http.get(this.proofExperienceUrl + "/all")
      .subscribe(
        (response) => {
          this.currencies = this.jsonToProofExperience(response)
          this.proofExperienceObserve.next(this.currencies)                                      // Component értesítése/frissítése itt történik 
        },
        (error) => {
          this.proofExperienceObserve.error("Error in Observe")
        }
      )
  }

  jsonToProofExperience(proofExperienceArray: any): ProofExperience[] {
    let currencies1: Array<ProofExperience> = []
    
    for(let proofExperience of proofExperienceArray){
      let newProofExperience = new ProofExperience()
      newProofExperience.fromObject(proofExperience)
      currencies1.push(newProofExperience)
    }    
    return currencies1
  }

  addProofExperience(proofExperience: ProofExperience){
    return new Promise( (resolve, reject) => {
      this.httpService.create(`${this.proofExperienceUrl}`, proofExperience)
        .then(
          (response) => {
            this.getProofExperienceWithObserver()
            resolve('ProofExperience add')
          }
        )
    })
  }

  updateProofExperience(proofExperience: ProofExperience){
    return new Promise( (resolve, reject) => {
      this.httpService.update(`${this.proofExperienceUrl}/${proofExperience.id}`, proofExperience)
        .then(
          (response) => { 
            this.getProofExperienceWithObserver() 
            resolve('ProofExperience updated')
          }
        )
    })
  }

  deleteProofExperience(proofExperience: ProofExperience){
    return new Promise( (resolve, reject) => {
      this.httpService.delete(`${this.proofExperienceUrl}/${proofExperience.id}`)
        .then(
          (response) => { 
            this.getProofExperienceWithObserver() 
            resolve('ProofExperience deleted')
          }
        )
    })
  }

  readProofExperienceOne(one: boolean, id?: string){
    let urls: string = ""
    if(one) urls = this.proofExperienceUrl + "/" + id
    else urls = this.proofExperienceUrl + "/all"

    return new Promise( (resolve, reject) => {
      this.httpService.read(urls)
        .then(
          (response) => {
            this.getProofExperienceWithObserver()
            resolve(response)
          }
        )
    })
  }

  getLastEditedProofExperience(){
    return this.lastEditedProofExperience
  }

}
