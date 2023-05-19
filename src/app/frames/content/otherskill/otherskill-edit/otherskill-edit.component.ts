import { Component, Input, OnInit } from '@angular/core';
import { OtherSkill } from 'src/app/model/otherskill';
import { OtherSkillService } from 'src/app/services/models/otherskill.service';
import { UrlService } from 'src/app/services/url.service';


@Component({
  selector: 'app-otherSkill-edit',
  templateUrl: './otherSkill-edit.component.html',
  styleUrls: ['./otherSkill-edit.component.css']
})
export class OtherSkillEditComponent implements OnInit {

  // @Input() otherSkill: OtherSkill

  lastEditedOtherSkill = <OtherSkill>{}

  editedOtherSkill = <OtherSkill>{}

  // currentLink: string = "/"

  constructor(private otherSkillService: OtherSkillService, private urlService: UrlService) { 
    this.lastEditedOtherSkill = this.otherSkillService.getLastEditedOtherSkill()
    if(this.lastEditedOtherSkill !== null || Object.keys(this.lastEditedOtherSkill).length !== 0){
      this.otherSkillService.lastEditedOtherSkill = <OtherSkill>{}
    }
  }
  
  ngOnInit(): void {

    // this.urlService.urlChanged
    // .subscribe(
    //   (url) => {
    //     this.currentLink = url
    //   }
    // )
    
    if(this.lastEditedOtherSkill !== null || Object.keys(this.lastEditedOtherSkill).length !== 0){
      this.otherSkillService.readOtherSkillOne(true, ""+this.lastEditedOtherSkill.id)
        .then(
          (otherSkillResp) => {
            let otherSkill1: OtherSkill = new OtherSkill()
            otherSkill1.fromObject(otherSkillResp)
            this.editedOtherSkill = otherSkill1
          }
        )
    }
  }

  onClickSubmit(form: any){
    let otherSkill1: OtherSkill = new OtherSkill()
    otherSkill1.fromObject(form.value)
    this.editedOtherSkill = otherSkill1
    this.otherSkillService.updateOtherSkill(this.editedOtherSkill)
  }
}
