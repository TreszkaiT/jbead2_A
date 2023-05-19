import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProofExperience } from '../../../model/proofexperience';
// import { ProofExperienceService } from '../../../../service/proofExperience.service';
import { faEdit, faTimes } from '@fortawesome/free-solid-svg-icons';
import { ProofExperienceService } from 'src/app/services/models/proofexperience.service';
import { UrlService } from 'src/app/services/url.service';

@Component({
  selector: 'app-proofExperience',
  templateUrl: './proofExperience.component.html',
  styleUrls: ['./proofExperience.component.css']
})
export class ProofExperienceComponent implements OnInit, OnDestroy {

  currencies: Array<ProofExperience> = []

  proofExperienceSubscribe: any

  faEdit = faEdit
  faTimes = faTimes

  constructor(private proofExperienceService: ProofExperienceService, private urlService: UrlService) { 

  }

  ngOnInit(): void {

    this.currencies = this.proofExperienceService.currencies

    this.proofExperienceSubscribe = this.proofExperienceService.proofExperienceObserve
      .subscribe(
        (currencies) => { this.currencies = currencies},
        (error) => { this.currencies = [] }
      )
  }

  ngOnDestroy(): void {
    this.proofExperienceSubscribe.unsubscribe()
  }

  onEditProofExperience(proofExperience: ProofExperience){
    this.proofExperienceService.lastEditedProofExperience = proofExperience
    this.urlService.jumpTo('/proofExperience-edit')
  }

  onDeleteProofExperience(proofExperience: ProofExperience){
    this.proofExperienceService.deleteProofExperience(proofExperience)
  }

}
