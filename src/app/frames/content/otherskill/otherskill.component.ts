import { Component, OnDestroy, OnInit } from '@angular/core';
import { OtherSkill } from '../../../model/otherskill';
// import { OtherSkillService } from '../../../../service/otherSkill.service';
import { faEdit, faTimes } from '@fortawesome/free-solid-svg-icons';
import { OtherSkillService } from 'src/app/services/models/otherskill.service';
import { UrlService } from 'src/app/services/url.service';

@Component({
  selector: 'app-otherSkill',
  templateUrl: './otherSkill.component.html',
  styleUrls: ['./otherSkill.component.css']
})
export class OtherSkillComponent implements OnInit, OnDestroy {

  currencies: Array<OtherSkill> = []

  otherSkillSubscribe: any

  faEdit = faEdit
  faTimes = faTimes

  constructor(private otherSkillService: OtherSkillService, private urlService: UrlService) { 

  }

  ngOnInit(): void {

    this.currencies = this.otherSkillService.currencies

    this.otherSkillSubscribe = this.otherSkillService.otherSkillObserve
      .subscribe(
        (currencies) => { this.currencies = currencies},
        (error) => { this.currencies = [] }
      )
  }

  ngOnDestroy(): void {
    this.otherSkillSubscribe.unsubscribe()
  }

  onEditOtherSkill(otherSkill: OtherSkill){
    this.otherSkillService.lastEditedOtherSkill = otherSkill
    this.urlService.jumpTo('/otherSkill-edit')
  }

  onDeleteOtherSkill(otherSkill: OtherSkill){
    this.otherSkillService.deleteOtherSkill(otherSkill)
  }

}
