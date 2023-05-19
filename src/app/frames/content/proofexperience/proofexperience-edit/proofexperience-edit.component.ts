import { Component, Input, OnInit } from '@angular/core';
import { ProofExperience } from 'src/app/model/proofexperience';
import { ProofExperienceService } from 'src/app/services/models/proofexperience.service';
import { UrlService } from 'src/app/services/url.service';


@Component({
  selector: 'app-proofExperience-edit',
  templateUrl: './proofExperience-edit.component.html',
  styleUrls: ['./proofExperience-edit.component.css']
})
export class ProofExperienceEditComponent implements OnInit {

  // @Input() proofExperience: ProofExperience

  lastEditedProofExperience = <ProofExperience>{}

  editedProofExperience = <ProofExperience>{}

  // currentLink: string = "/"

  constructor(private proofExperienceService: ProofExperienceService, private urlService: UrlService) { 
    this.lastEditedProofExperience = this.proofExperienceService.getLastEditedProofExperience()
    if(this.lastEditedProofExperience !== null || Object.keys(this.lastEditedProofExperience).length !== 0){
      this.proofExperienceService.lastEditedProofExperience = <ProofExperience>{}
    }
  }
  
  ngOnInit(): void {

    // this.urlService.urlChanged
    // .subscribe(
    //   (url) => {
    //     this.currentLink = url
    //   }
    // )
    
    if(this.lastEditedProofExperience !== null || Object.keys(this.lastEditedProofExperience).length !== 0){
      this.proofExperienceService.readProofExperienceOne(true, ""+this.lastEditedProofExperience.id)
        .then(
          (proofExperienceResp) => {
            let proofExperience1: ProofExperience = new ProofExperience()
            proofExperience1.fromObject(proofExperienceResp)
            this.editedProofExperience = proofExperience1
          }
        )
    }
  }

  onClickSubmit(form: any){
    let proofExperience1: ProofExperience = new ProofExperience()
    proofExperience1.fromObject(form.value)
    this.editedProofExperience = proofExperience1
    this.proofExperienceService.updateProofExperience(this.editedProofExperience)
  }
}
