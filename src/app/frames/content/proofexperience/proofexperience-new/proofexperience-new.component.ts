import { Component, OnInit } from '@angular/core';
import { ProofExperienceService } from 'src/app/services/models/proofexperience.service';

@Component({
  selector: 'app-proofExperience-new',
  templateUrl: './proofExperience-new.component.html',
  styleUrls: ['./proofExperience-new.component.css']
})
export class ProofExperienceNewComponent implements OnInit {

  constructor(private proofExperienceService: ProofExperienceService) { }

  ngOnInit(): void {
  }

  onClickSubmit(form: any){    
    this.proofExperienceService.addProofExperience(form.value)
      .then(
        (message) => { console.info(message) }
      )
      console.log(form.value)
  }

}
