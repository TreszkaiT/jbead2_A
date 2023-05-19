import { Component, OnInit } from '@angular/core';
import { OtherSkillService } from 'src/app/services/models/otherskill.service';

@Component({
  selector: 'app-otherSkill-new',
  templateUrl: './otherSkill-new.component.html',
  styleUrls: ['./otherSkill-new.component.css']
})
export class OtherSkillNewComponent implements OnInit {

  constructor(private otherSkillService: OtherSkillService) { }

  ngOnInit(): void {
  }

  onClickSubmit(form: any){    
    this.otherSkillService.addOtherSkill(form.value)
      .then(
        (message) => { console.info(message) }
      )
      console.log(form.value)
  }

}
